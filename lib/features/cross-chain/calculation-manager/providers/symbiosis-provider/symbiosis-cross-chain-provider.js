"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbiosisCrossChainProvider = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("src/common/errors");
const tokens_1 = require("src/common/tokens");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const blockchain_id_1 = require("src/core/blockchain/utils/blockchains-info/constants/blockchain-id");
const web3_pure_1 = require("src/core/blockchain/web3-pure/web3-pure");
const injector_1 = require("src/core/injector/injector");
const get_from_without_fee_1 = require("src/features/common/utils/get-from-without-fee");
const cross_chain_trade_type_1 = require("src/features/cross-chain/calculation-manager/models/cross-chain-trade-type");
const cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider");
const proxy_cross_chain_evm_trade_1 = require("src/features/cross-chain/calculation-manager/providers/common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const symbiosis_cross_chain_supported_blockchain_1 = require("src/features/cross-chain/calculation-manager/providers/symbiosis-provider/constants/symbiosis-cross-chain-supported-blockchain");
const symbiosis_error_1 = require("src/features/cross-chain/calculation-manager/providers/symbiosis-provider/models/symbiosis-error");
const symbiosis_cross_chain_trade_1 = require("src/features/cross-chain/calculation-manager/providers/symbiosis-provider/symbiosis-cross-chain-trade");
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/constants");
class SymbiosisCrossChainProvider extends cross_chain_provider_1.CrossChainProvider {
    constructor() {
        super(...arguments);
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS;
    }
    isSupportedBlockchain(blockchain) {
        return symbiosis_cross_chain_supported_blockchain_1.symbiosisCrossChainSupportedBlockchains.some(supportedBlockchain => supportedBlockchain === blockchain);
    }
    areSupportedBlockchains(fromBlockchain, toBlockchain) {
        if (fromBlockchain === blockchain_name_1.BLOCKCHAIN_NAME.BITCOIN) {
            return false;
        }
        return super.areSupportedBlockchains(fromBlockchain, toBlockchain);
    }
    async calculate(from, toToken, options) {
        const fromBlockchain = from.blockchain;
        const toBlockchain = toToken.blockchain;
        const useProxy = options?.useProxy?.[this.type] ?? true;
        // @TODO remove Tron check
        if (!this.areSupportedBlockchains(fromBlockchain, toBlockchain) ||
            fromBlockchain === blockchain_name_1.BLOCKCHAIN_NAME.TRON) {
            return {
                trade: null,
                error: new errors_1.NotSupportedTokensError(),
                tradeType: this.type
            };
        }
        try {
            const fromAddress = options.fromAddress ||
                this.getWalletAddress(fromBlockchain) ||
                constants_1.oneinchApiParams.nativeAddress;
            const feeInfo = await this.getFeeInfo(fromBlockchain, options.providerAddress, from, useProxy);
            const fromWithoutFee = (0, get_from_without_fee_1.getFromWithoutFee)(from, feeInfo.pathrProxy?.platformFee?.percent);
            const tokenIn = {
                chainId: blockchain_id_1.blockchainId[fromBlockchain],
                address: from.isNative ? '' : from.address,
                decimals: from.decimals,
                isNative: from.isNative,
                symbol: from.symbol
            };
            const tokenOut = {
                chainId: toBlockchain !== blockchain_name_1.BLOCKCHAIN_NAME.TRON ? blockchain_id_1.blockchainId[toBlockchain] : 728126428,
                address: toToken.isNative ? '' : toToken.address,
                decimals: toToken.decimals,
                isNative: toToken.isNative,
                symbol: toToken.symbol
            };
            const symbiosisTokenAmountIn = {
                ...tokenIn,
                amount: fromWithoutFee.stringWeiAmount
            };
            const receiverAddress = options.receiverAddress || fromAddress;
            const deadline = Math.floor(Date.now() / 1000) + 60 * options.deadline;
            const slippageTolerance = options.slippageTolerance * 10000;
            const swapParams = {
                tokenAmountIn: symbiosisTokenAmountIn,
                tokenOut,
                from: fromAddress,
                to: receiverAddress || fromAddress,
                revertableAddress: fromAddress,
                slippage: slippageTolerance,
                deadline
            };
            const { tokenAmountOut, inTradeType, outTradeType, tx, approveTo, route } = await injector_1.Injector.httpClient.post(`${symbiosis_cross_chain_trade_1.SymbiosisCrossChainTrade.symbiosisApi}/swapping/exact_in?partnerId=pathr`, swapParams);
            const to = new tokens_1.PriceTokenAmount({
                ...toToken.asStruct,
                tokenAmount: new bignumber_js_1.default(web3_pure_1.Web3Pure.fromWei(tokenAmountOut.amount, tokenAmountOut.decimals))
            });
            const gasData = options.gasCalculation === 'enabled'
                ? await symbiosis_cross_chain_trade_1.SymbiosisCrossChainTrade.getGasData(from, to, swapParams, feeInfo, approveTo, options.providerAddress, options.receiverAddress)
                : null;
            return {
                trade: new symbiosis_cross_chain_trade_1.SymbiosisCrossChainTrade({
                    from,
                    to,
                    gasData,
                    priceImpact: from.calculatePriceImpactPercent(to),
                    slippage: options.slippageTolerance,
                    swapParams,
                    feeInfo,
                    transitAmount: from.tokenAmount,
                    tradeType: { in: inTradeType, out: outTradeType },
                    contractAddresses: {
                        providerRouter: tx.to,
                        providerGateway: approveTo
                    }
                }, options.providerAddress, await this.getRoutePath(from, to, route)),
                tradeType: this.type
            };
        }
        catch (err) {
            let pathrSdkError = cross_chain_provider_1.CrossChainProvider.parseError(err);
            const symbiosisMessage = err?.error?.message;
            if (symbiosisMessage?.includes('$') || symbiosisMessage?.includes('Min amount')) {
                const symbiosisError = err.error;
                pathrSdkError =
                    symbiosisError.code === symbiosis_error_1.errorCode.AMOUNT_LESS_THAN_FEE ||
                        symbiosisError.code === 400
                        ? new errors_1.TooLowAmountError()
                        : await this.checkMinMaxErrors(symbiosisError);
            }
            else if (symbiosisMessage) {
                pathrSdkError = new errors_1.PathrSdkError(symbiosisMessage);
            }
            return {
                trade: null,
                error: pathrSdkError,
                tradeType: this.type
            };
        }
    }
    async checkMinMaxErrors(err) {
        if (err.code === symbiosis_error_1.errorCode.AMOUNT_TOO_LOW) {
            const index = err.message.lastIndexOf('$');
            const transitTokenAmount = new bignumber_js_1.default(err.message.substring(index + 1));
            return new errors_1.MinAmountError(transitTokenAmount, 'USDC');
        }
        if (err?.code === symbiosis_error_1.errorCode.AMOUNT_TOO_HIGH) {
            const index = err.message.lastIndexOf('$');
            const transitTokenAmount = new bignumber_js_1.default(err.message.substring(index + 1));
            return new errors_1.MaxAmountError(transitTokenAmount, 'USDC');
        }
        return new errors_1.PathrSdkError(err.message);
    }
    async getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy) {
        return proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy);
    }
    getTransferToken(route, from) {
        const fromBlockchainId = blockchain_id_1.blockchainId[from.blockchain];
        const fromRouting = route.filter(token => token.chainId === fromBlockchainId);
        const token = fromRouting.at(-1);
        return fromRouting.length !== 1
            ? {
                address: token.address,
                decimals: token.decimals,
                name: token.name,
                blockchain: from.blockchain,
                symbol: token.symbol
            }
            : undefined;
    }
    async getRoutePath(fromToken, toToken, route) {
        const fromChainId = blockchain_id_1.blockchainId[fromToken.blockchain];
        const toChainId = blockchain_id_1.blockchainId[toToken.blockchain];
        const transitFrom = [...route].reverse().find(el => el.chainId === fromChainId);
        const transitTo = route.find(el => el.chainId === toChainId);
        const fromTokenAmount = transitFrom
            ? await tokens_1.TokenAmount.createToken({
                blockchain: fromToken.blockchain,
                address: transitFrom.address,
                weiAmount: new bignumber_js_1.default(0)
            })
            : fromToken;
        const toTokenAmount = transitTo
            ? await tokens_1.TokenAmount.createToken({
                blockchain: toToken.blockchain,
                address: transitTo.address,
                weiAmount: new bignumber_js_1.default(0)
            })
            : toToken;
        const routePath = [];
        if (transitFrom) {
            routePath.push({
                type: 'on-chain',
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.SYMBIOSIS_SWAP,
                path: [fromToken, fromTokenAmount]
            });
        }
        routePath.push({
            type: 'cross-chain',
            provider: cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS,
            path: [fromTokenAmount, toTokenAmount]
        });
        if (transitTo) {
            routePath.push({
                type: 'on-chain',
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.SYMBIOSIS_SWAP,
                path: [toTokenAmount, toToken]
            });
        }
        return routePath;
    }
}
exports.SymbiosisCrossChainProvider = SymbiosisCrossChainProvider;
//# sourceMappingURL=symbiosis-cross-chain-provider.js.map