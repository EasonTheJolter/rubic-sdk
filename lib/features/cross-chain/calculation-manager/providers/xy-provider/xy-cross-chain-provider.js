"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XyCrossChainProvider = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("../../../../../common/errors");
const tokens_1 = require("../../../../../common/tokens");
const blockchain_1 = require("../../../../../common/utils/blockchain");
const blockchain_id_1 = require("../../../../../core/blockchain/utils/blockchains-info/constants/blockchain-id");
const evm_web3_pure_1 = require("../../../../../core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/evm-web3-pure");
const web3_pure_1 = require("../../../../../core/blockchain/web3-pure/web3-pure");
const injector_1 = require("../../../../../core/injector/injector");
const get_from_without_fee_1 = require("../../../../common/utils/get-from-without-fee");
const cross_chain_trade_type_1 = require("../../models/cross-chain-trade-type");
const cross_chain_provider_1 = require("../common/cross-chain-provider");
const proxy_cross_chain_evm_trade_1 = require("../common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const xy_supported_blockchains_1 = require("./constants/xy-supported-blockchains");
const xy_cross_chain_trade_1 = require("./xy-cross-chain-trade");
const on_chain_trade_type_1 = require("../../../../on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
class XyCrossChainProvider extends cross_chain_provider_1.CrossChainProvider {
    constructor() {
        super(...arguments);
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.XY;
    }
    isSupportedBlockchain(blockchain) {
        return xy_supported_blockchains_1.xySupportedBlockchains.some(supportedBlockchain => supportedBlockchain === blockchain);
    }
    async calculate(fromToken, toToken, options) {
        const fromBlockchain = fromToken.blockchain;
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
            const receiverAddress = options.receiverAddress || this.getWalletAddress(fromBlockchain);
            const feeInfo = await this.getFeeInfo(fromBlockchain, options.providerAddress, fromToken, useProxy);
            const fromWithoutFee = (0, get_from_without_fee_1.getFromWithoutFee)(fromToken, feeInfo.pathrProxy?.platformFee?.percent);
            const slippageTolerance = options.slippageTolerance * 100;
            const requestParams = {
                srcChainId: String(blockchain_id_1.blockchainId[fromBlockchain]),
                fromTokenAddress: fromToken.isNative
                    ? xy_cross_chain_trade_1.XyCrossChainTrade.nativeAddress
                    : fromToken.address,
                amount: fromWithoutFee.stringWeiAmount,
                slippage: String(slippageTolerance),
                destChainId: blockchain_id_1.blockchainId[toBlockchain],
                toTokenAddress: toToken.isNative
                    ? xy_cross_chain_trade_1.XyCrossChainTrade.nativeAddress
                    : toToken.address,
                referrer: '0xCb022eBa97B53f74E0901618252682F0728cd192',
                receiveAddress: receiverAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS
            };
            const { toTokenAmount, statusCode, msg, quote } = await injector_1.Injector.httpClient.get(`${XyCrossChainProvider.apiEndpoint}/swap`, {
                params: { ...requestParams }
            });
            this.analyzeStatusCode(statusCode, msg);
            const to = new tokens_1.PriceTokenAmount({
                ...toToken.asStruct,
                tokenAmount: web3_pure_1.Web3Pure.fromWei(toTokenAmount, toToken.decimals)
            });
            const gasData = options.gasCalculation === 'enabled'
                ? await xy_cross_chain_trade_1.XyCrossChainTrade.getGasData(fromToken, to, requestParams, feeInfo, options.providerAddress, options.receiverAddress)
                : null;
            return {
                trade: new xy_cross_chain_trade_1.XyCrossChainTrade({
                    from: fromToken,
                    to,
                    transactionRequest: {
                        ...requestParams,
                        receiveAddress: receiverAddress
                    },
                    gasData,
                    priceImpact: fromToken.calculatePriceImpactPercent(to),
                    slippage: options.slippageTolerance,
                    feeInfo,
                    onChainTrade: null
                }, options.providerAddress, await this.getRoutePath(fromToken, to, quote)),
                tradeType: this.type
            };
        }
        catch (err) {
            const pathrSdkError = cross_chain_provider_1.CrossChainProvider.parseError(err);
            return {
                trade: null,
                error: pathrSdkError,
                tradeType: this.type
            };
        }
    }
    async getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy) {
        return proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getFeeInfo(fromBlockchain, providerAddress, percentFeeToken, useProxy);
    }
    analyzeStatusCode(code, message) {
        switch (code) {
            case '0':
                break;
            case '3':
            case '4':
                throw new errors_1.InsufficientLiquidityError();
            case '6': {
                const [minAmount, tokenSymbol] = message.split('to ')[1].slice(0, -1).split(' ');
                throw new errors_1.MinAmountError(new bignumber_js_1.default(minAmount), tokenSymbol);
            }
            case '5':
            case '10':
            case '99':
            default:
                throw new errors_1.PathrSdkError('Unknown Error.');
        }
    }
    async getRoutePath(fromToken, toToken, quote) {
        const transitFrom = quote.sourceChainSwaps?.toToken;
        const transitTo = quote.destChainSwaps?.fromToken;
        const fromTokenAmount = transitFrom
            ? await tokens_1.TokenAmount.createToken({
                blockchain: fromToken.blockchain,
                address: (0, blockchain_1.compareAddresses)(transitFrom.tokenAddress, xy_cross_chain_trade_1.XyCrossChainTrade.nativeAddress)
                    ? evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS
                    : transitFrom.tokenAddress,
                weiAmount: new bignumber_js_1.default(0)
            })
            : fromToken;
        const toTokenAmount = transitTo
            ? await tokens_1.TokenAmount.createToken({
                blockchain: toToken.blockchain,
                address: (0, blockchain_1.compareAddresses)(transitTo.tokenAddress, xy_cross_chain_trade_1.XyCrossChainTrade.nativeAddress)
                    ? evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS
                    : transitTo.tokenAddress,
                weiAmount: new bignumber_js_1.default(0)
            })
            : toToken;
        const routePath = [];
        if (transitFrom) {
            routePath.push({
                type: 'on-chain',
                // @TODO provider: ON_CHAIN_TRADE_TYPE.XY_DEX,
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH,
                path: [fromToken, fromTokenAmount]
            });
        }
        routePath.push({
            type: 'cross-chain',
            provider: cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.XY,
            path: [fromTokenAmount, toTokenAmount]
        });
        if (transitTo) {
            routePath.push({
                type: 'on-chain',
                // @TODO provider: ON_CHAIN_TRADE_TYPE.XY_DEX,
                provider: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH,
                path: [toTokenAmount, toToken]
            });
        }
        return routePath;
    }
}
exports.XyCrossChainProvider = XyCrossChainProvider;
XyCrossChainProvider.apiEndpoint = 'https://open-api.xy.finance/v1';
//# sourceMappingURL=xy-cross-chain-provider.js.map