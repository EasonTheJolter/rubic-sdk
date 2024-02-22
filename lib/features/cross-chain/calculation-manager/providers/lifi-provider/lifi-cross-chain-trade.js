"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifiCrossChainTrade = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("../../../../../common/errors");
const evm_web3_pure_1 = require("../../../../../core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/evm-web3-pure");
const web3_pure_1 = require("../../../../../core/blockchain/web3-pure/web3-pure");
const injector_1 = require("../../../../../core/injector/injector");
const cross_chain_trade_type_1 = require("../../models/cross-chain-trade-type");
const pathr_proxy_contract_address_1 = require("../common/constants/pathr-proxy-contract-address");
const evm_common_cross_chain_abi_1 = require("../common/emv-cross-chain-trade/constants/evm-common-cross-chain-abi");
const gateway_pathr_cross_chain_abi_1 = require("../common/emv-cross-chain-trade/constants/gateway-pathr-cross-chain-abi");
const evm_cross_chain_trade_1 = require("../common/emv-cross-chain-trade/evm-cross-chain-trade");
const bridge_type_1 = require("../common/models/bridge-type");
const proxy_cross_chain_evm_trade_1 = require("../common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const convert_gas_price_1 = require("../../utils/convert-gas-price");
/**
 * Calculated Celer cross-chain trade.
 */
class LifiCrossChainTrade extends evm_cross_chain_trade_1.EvmCrossChainTrade {
    /** @internal */
    static async getGasData(from, toToken, route, feeInfo, providerAddress, receiverAddress) {
        const fromBlockchain = from.blockchain;
        const walletAddress = injector_1.Injector.web3PrivateService.getWeb3PrivateByBlockchain(fromBlockchain).address;
        if (!walletAddress) {
            return null;
        }
        try {
            let gasLimit;
            let gasDetails;
            const web3Public = injector_1.Injector.web3PublicService.getWeb3Public(fromBlockchain);
            if (feeInfo.pathrProxy?.fixedFee?.amount.gt(0)) {
                const { contractAddress, contractAbi, methodName, methodArguments, value } = await new LifiCrossChainTrade({
                    from,
                    to: toToken,
                    route,
                    gasData: null,
                    toTokenAmountMin: new bignumber_js_1.default(0),
                    feeInfo,
                    priceImpact: from.calculatePriceImpactPercent(toToken) || 0,
                    onChainSubtype: {
                        from: undefined,
                        to: undefined
                    },
                    bridgeType: bridge_type_1.BRIDGE_TYPE.LIFI,
                    slippage: 0
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).getContractParams({}, true);
                const [proxyGasLimit, proxyGasDetails] = await Promise.all([
                    web3Public.getEstimatedGas(contractAbi, contractAddress, methodName, methodArguments, walletAddress, value),
                    (0, convert_gas_price_1.convertGasDataToBN)(await injector_1.Injector.gasPriceApi.getGasPrice(from.blockchain))
                ]);
                gasLimit = proxyGasLimit;
                gasDetails = proxyGasDetails;
            }
            else {
                const { data, value, to } = await new LifiCrossChainTrade({
                    from,
                    to: toToken,
                    route,
                    gasData: null,
                    toTokenAmountMin: new bignumber_js_1.default(0),
                    feeInfo,
                    priceImpact: from.calculatePriceImpactPercent(toToken) || 0,
                    onChainSubtype: {
                        from: undefined,
                        to: undefined
                    },
                    bridgeType: bridge_type_1.BRIDGE_TYPE.LIFI,
                    slippage: 0
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).fetchSwapData(receiverAddress, true);
                const defaultGasLimit = await web3Public.getEstimatedGasByData(walletAddress, to, {
                    data,
                    value
                });
                const defaultGasDetails = (0, convert_gas_price_1.convertGasDataToBN)(await injector_1.Injector.gasPriceApi.getGasPrice(from.blockchain));
                gasLimit = defaultGasLimit;
                gasDetails = defaultGasDetails;
            }
            if (!gasLimit?.isFinite()) {
                return null;
            }
            const increasedGasLimit = web3_pure_1.Web3Pure.calculateGasMargin(gasLimit, 1.2);
            return {
                gasLimit: increasedGasLimit,
                ...gasDetails
            };
        }
        catch (_err) {
            return null;
        }
    }
    get fromBlockchain() {
        return this.from.blockchain;
    }
    get fromContractAddress() {
        return this.isProxyTrade
            ? pathr_proxy_contract_address_1.pathrProxyContractAddress[this.fromBlockchain].gateway
            : this.providerGateway;
    }
    get methodName() {
        return 'startBridgeTokensViaGenericCrossChain';
    }
    constructor(crossChainTrade, providerAddress, routePath) {
        super(providerAddress, routePath);
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.LIFI;
        this.isAggregator = true;
        this.from = crossChainTrade.from;
        this.to = crossChainTrade.to;
        this.route = crossChainTrade.route;
        this.providerGateway = this.route.steps[0].estimate.approvalAddress;
        this.gasData = crossChainTrade.gasData;
        this.toTokenAmountMin = crossChainTrade.toTokenAmountMin;
        this.feeInfo = crossChainTrade.feeInfo;
        this.slippage = crossChainTrade.slippage;
        this.priceImpact = crossChainTrade.priceImpact;
        this.onChainSubtype = crossChainTrade.onChainSubtype;
        this.bridgeType = crossChainTrade.bridgeType;
    }
    async swapDirect(options = {}) {
        try {
            await this.checkTradeErrors();
            if (options.receiverAddress) {
                throw new errors_1.PathrSdkError('Receiver address not supported');
            }
            await this.checkAllowanceAndApprove(options);
            const { onConfirm, gasLimit, gasPrice, gasPriceOptions } = options;
            let transactionHash;
            const onTransactionHash = (hash) => {
                if (onConfirm) {
                    onConfirm(hash);
                }
                transactionHash = hash;
            };
            // eslint-disable-next-line no-useless-catch
            try {
                const { data, value, to } = await this.fetchSwapData(options?.receiverAddress, false, options?.directTransaction);
                await this.web3Private.trySendTransaction(to, {
                    data,
                    value,
                    onTransactionHash,
                    gas: gasLimit,
                    gasPrice,
                    gasPriceOptions
                });
                return transactionHash;
            }
            catch (err) {
                throw err;
            }
        }
        catch (err) {
            if ([400, 500, 503].includes(err.code)) {
                throw new errors_1.SwapRequestError();
            }
            throw err;
        }
    }
    async getContractParams(options, skipAmountChangeCheck = false) {
        const { data, value: providerValue, to: providerRouter } = await this.fetchSwapData(options?.receiverAddress, skipAmountChangeCheck);
        const bridgeData = proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getBridgeData(options, {
            walletAddress: this.walletAddress,
            fromTokenAmount: this.from,
            toTokenAmount: this.to,
            srcChainTrade: null,
            providerAddress: this.providerAddress,
            type: `lifi:${this.bridgeType}`,
            fromAddress: this.walletAddress
        });
        const extraNativeFee = this.from.isNative
            ? new bignumber_js_1.default(providerValue).minus(this.from.stringWeiAmount).toFixed()
            : new bignumber_js_1.default(providerValue).toFixed();
        const providerData = await proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getGenericProviderData(providerRouter, data, this.fromBlockchain, providerRouter, extraNativeFee);
        const methodArguments = [bridgeData, providerData];
        const value = this.getSwapValue(providerValue);
        const transactionConfiguration = evm_web3_pure_1.EvmWeb3Pure.encodeMethodCall(pathr_proxy_contract_address_1.pathrProxyContractAddress[this.from.blockchain].router, evm_common_cross_chain_abi_1.evmCommonCrossChainAbi, this.methodName, methodArguments, value);
        const sendingToken = this.from.isNative ? [] : [this.from.address];
        const sendingAmount = this.from.isNative ? [] : [this.from.stringWeiAmount];
        return {
            contractAddress: pathr_proxy_contract_address_1.pathrProxyContractAddress[this.from.blockchain].gateway,
            contractAbi: gateway_pathr_cross_chain_abi_1.gatewayPathrCrossChainAbi,
            methodName: 'startViaPathr',
            methodArguments: [sendingToken, sendingAmount, transactionConfiguration.data],
            value
        };
    }
    async fetchSwapData(receiverAddress, skipAmountChangeCheck = false, directTransaction) {
        if (directTransaction) {
            return {
                data: directTransaction.data,
                to: directTransaction.to,
                value: directTransaction.value
            };
        }
        const firstStep = this.route.steps[0];
        const step = {
            ...firstStep,
            action: {
                ...firstStep.action,
                fromAddress: this.walletAddress,
                toAddress: receiverAddress || this.walletAddress
            },
            execution: {
                status: 'NOT_STARTED',
                process: [
                    {
                        message: 'Preparing transaction.',
                        startedAt: Date.now(),
                        status: 'STARTED',
                        type: 'CROSS_CHAIN'
                    }
                ]
            }
        };
        const swapResponse = await this.httpClient.post('https://li.quest/v1/advanced/stepTransaction', {
            ...step
        });
        if (!skipAmountChangeCheck) {
            evm_cross_chain_trade_1.EvmCrossChainTrade.checkAmountChange(swapResponse.transactionRequest, swapResponse.estimate.toAmount, this.to.stringWeiAmount);
        }
        return swapResponse.transactionRequest;
    }
    getTradeAmountRatio(fromUsd) {
        return fromUsd.dividedBy(this.to.tokenAmount);
    }
    getTradeInfo() {
        return {
            estimatedGas: this.estimatedGas,
            feeInfo: this.feeInfo,
            priceImpact: this.priceImpact || null,
            slippage: this.slippage * 100,
            routePath: this.routePath
        };
    }
}
exports.LifiCrossChainTrade = LifiCrossChainTrade;
//# sourceMappingURL=lifi-cross-chain-trade.js.map