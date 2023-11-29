"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebridgeCrossChainProvider = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("../../../../../common/errors");
const tokens_1 = require("../../../../../common/tokens");
const native_tokens_1 = require("../../../../../common/tokens/constants/native-tokens");
const blockchain_id_1 = require("../../../../../core/blockchain/utils/blockchains-info/constants/blockchain-id");
const web3_pure_1 = require("../../../../../core/blockchain/web3-pure/web3-pure");
const injector_1 = require("../../../../../core/injector/injector");
const get_from_without_fee_1 = require("../../../../common/utils/get-from-without-fee");
const cross_chain_trade_type_1 = require("../../models/cross-chain-trade-type");
const cross_chain_provider_1 = require("../common/cross-chain-provider");
const proxy_cross_chain_evm_trade_1 = require("../common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const contract_abi_1 = require("./constants/contract-abi");
const contract_address_1 = require("./constants/contract-address");
const debridge_cross_chain_supported_blockchain_1 = require("./constants/debridge-cross-chain-supported-blockchain");
const gate_contract_abi_1 = require("./constants/gate-contract-abi");
const debridge_cross_chain_trade_1 = require("./debridge-cross-chain-trade");
const on_chain_trade_type_1 = require("../../../../on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
class DebridgeCrossChainProvider extends cross_chain_provider_1.CrossChainProvider {
    constructor() {
        super(...arguments);
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.DEBRIDGE;
    }
    isSupportedBlockchain(blockchain) {
        return debridge_cross_chain_supported_blockchain_1.deBridgeCrossChainSupportedBlockchains.some(supportedBlockchain => supportedBlockchain === blockchain);
    }
    static async getDeBridgeGateAddress(web3Public, fromBlockchain) {
        return await web3Public.callContractMethod(contract_address_1.DE_BRIDGE_CONTRACT_ADDRESS[fromBlockchain].providerRouter, contract_abi_1.DE_BRIDGE_CONTRACT_ABI, 'deBridgeGate');
    }
    static async getCryptoFeeAmount(web3Public, fromBlockchain) {
        const deBridgeGateAddress = await DebridgeCrossChainProvider.getDeBridgeGateAddress(web3Public, fromBlockchain);
        return web3Public.callContractMethod(deBridgeGateAddress, gate_contract_abi_1.DE_BRIDGE_GATE_CONTRACT_ABI, 'globalFixedNativeFee');
    }
    async calculate(from, toToken, options) {
        const fromBlockchain = from.blockchain;
        const toBlockchain = toToken.blockchain;
        const useProxy = options?.useProxy?.[this.type] ?? true;
        if (!this.areSupportedBlockchains(fromBlockchain, toBlockchain)) {
            return {
                trade: null,
                error: new errors_1.NotSupportedTokensError(),
                tradeType: this.type
            };
        }
        try {
            const fakeAddress = '0xe388Ed184958062a2ea29B7fD049ca21244AE02e';
            const feeInfo = await this.getFeeInfo(fromBlockchain, options.providerAddress, from, useProxy);
            const fromWithoutFee = (0, get_from_without_fee_1.getFromWithoutFee)(from, feeInfo.rubicProxy?.platformFee?.percent);
            const requestParams = {
                srcChainId: blockchain_id_1.blockchainId[fromBlockchain],
                srcChainTokenIn: from.address,
                srcChainTokenInAmount: fromWithoutFee.stringWeiAmount,
                dstChainId: blockchain_id_1.blockchainId[toBlockchain],
                dstChainTokenOut: toToken.address,
                dstChainTokenOutRecipient: this.getWalletAddress(fromBlockchain) || fakeAddress,
                prependOperatingExpenses: false
            };
            const { tx, estimation } = await injector_1.Injector.httpClient.get(`${DebridgeCrossChainProvider.apiEndpoint}/order/quote`, {
                params: requestParams
            });
            const to = new tokens_1.PriceTokenAmount({
                ...toToken.asStruct,
                tokenAmount: web3_pure_1.Web3Pure.fromWei(estimation.dstChainTokenOut.maxTheoreticalAmount, estimation.dstChainTokenOut.decimals)
            });
            const slippage = 0;
            const toTokenAmountMin = web3_pure_1.Web3Pure.fromWei(estimation.dstChainTokenOut.amount, estimation.dstChainTokenOut.decimals).multipliedBy(1 - slippage);
            const transitToken = estimation.srcChainTokenOut || estimation.srcChainTokenIn;
            const web3Public = injector_1.Injector.web3PublicService.getWeb3Public(fromBlockchain);
            const cryptoFeeAmount = await DebridgeCrossChainProvider.getCryptoFeeAmount(web3Public, fromBlockchain);
            const nativeToken = native_tokens_1.nativeTokensList[fromBlockchain];
            const cryptoFeeToken = await tokens_1.PriceTokenAmount.createFromToken({
                ...nativeToken,
                weiAmount: new bignumber_js_1.default(cryptoFeeAmount)
            });
            const gasData = options.gasCalculation === 'enabled'
                ? await debridge_cross_chain_trade_1.DebridgeCrossChainTrade.getGasData(from, to, requestParams, feeInfo, options.providerAddress, options.receiverAddress)
                : null;
            return {
                trade: new debridge_cross_chain_trade_1.DebridgeCrossChainTrade({
                    from,
                    to,
                    transactionRequest: requestParams,
                    gasData,
                    priceImpact: from.calculatePriceImpactPercent(to),
                    allowanceTarget: tx.allowanceTarget,
                    slippage,
                    feeInfo: {
                        ...feeInfo,
                        provider: {
                            cryptoFee: {
                                amount: web3_pure_1.Web3Pure.fromWei(new bignumber_js_1.default(cryptoFeeAmount)),
                                token: cryptoFeeToken
                            }
                        }
                    },
                    transitAmount: web3_pure_1.Web3Pure.fromWei(transitToken.amount, transitToken.decimals),
                    toTokenAmountMin,
                    maxTheoreticalAmount: web3_pure_1.Web3Pure.fromWei(estimation.dstChainTokenOut.maxTheoreticalAmount),
                    cryptoFeeToken,
                    onChainTrade: null
                }, options.providerAddress, await this.getRoutePath(estimation, from, to)),
                tradeType: this.type
            };
        }
        catch (err) {
            const rubicSdkError = cross_chain_provider_1.CrossChainProvider.parseError(err);
            const debridgeApiError = this.parseDebridgeApiError(err);
            return {
                trade: null,
                error: debridgeApiError || rubicSdkError,
                tradeType: this.type
            };
        }
    }
    async getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy) {
        return proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy);
    }
    parseDebridgeApiError(httpErrorResponse) {
        if (httpErrorResponse?.error?.errorId === 'INCLUDED_GAS_FEE_NOT_COVERED_BY_INPUT_AMOUNT' ||
            httpErrorResponse?.error?.errorId === 'ERROR_LOW_GIVE_AMOUNT') {
            return new errors_1.TooLowAmountError();
        }
        // @TODO handle other debridge API error codes:
        // CONNECTOR_1INCH_RETURNED_ERROR
        // INCLUDED_GAS_FEE_CANNOT_BE_ESTIMATED_FOR_TRANSACTION_BUNDLE
        return null;
    }
    async getRoutePath(estimation, from, to) {
        const fromChainId = String(blockchain_id_1.blockchainId[from.blockchain]);
        const toChainId = String(blockchain_id_1.blockchainId[to.blockchain]);
        const transitFrom = [...estimation.costsDetails]
            .reverse()
            .find(el => el.chain === fromChainId);
        const transitTo = estimation.costsDetails.find(el => el.chain === toChainId);
        const fromTokenAmount = transitFrom
            ? await tokens_1.TokenAmount.createToken({
                blockchain: from.blockchain,
                address: transitFrom.tokenOut,
                weiAmount: new bignumber_js_1.default(transitFrom.amountOut)
            })
            : from;
        const toTokenAmount = transitTo
            ? await tokens_1.TokenAmount.createToken({
                blockchain: to.blockchain,
                address: transitTo.tokenIn,
                weiAmount: new bignumber_js_1.default(transitTo.amountIn)
            })
            : to;
        // @TODO Add dex true provider and path
        return [
            {
                type: 'on-chain',
                path: [from, fromTokenAmount],
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH
            },
            {
                type: 'cross-chain',
                path: [fromTokenAmount, toTokenAmount],
                provider: cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.DEBRIDGE
            },
            {
                type: 'on-chain',
                path: [toTokenAmount, to],
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH
            }
        ];
    }
}
exports.DebridgeCrossChainProvider = DebridgeCrossChainProvider;
DebridgeCrossChainProvider.apiEndpoint = 'https://api.dln.trade/v1.0/dln';
//# sourceMappingURL=debridge-cross-chain-provider.js.map