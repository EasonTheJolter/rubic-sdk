"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebridgeCrossChainTrade = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("../../../../../common/errors");
const errors_2 = require("../../../../../common/utils/errors");
const evm_web3_pure_1 = require("../../../../../core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/evm-web3-pure");
const web3_pure_1 = require("../../../../../core/blockchain/web3-pure/web3-pure");
const injector_1 = require("../../../../../core/injector/injector");
const cross_chain_trade_type_1 = require("../../models/cross-chain-trade-type");
const rubic_proxy_contract_address_1 = require("../common/constants/rubic-proxy-contract-address");
const evm_common_cross_chain_abi_1 = require("../common/emv-cross-chain-trade/constants/evm-common-cross-chain-abi");
const gateway_rubic_cross_chain_abi_1 = require("../common/emv-cross-chain-trade/constants/gateway-rubic-cross-chain-abi");
const evm_cross_chain_trade_1 = require("../common/emv-cross-chain-trade/evm-cross-chain-trade");
const bridge_type_1 = require("../common/models/bridge-type");
const proxy_cross_chain_evm_trade_1 = require("../common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const debridge_cross_chain_provider_1 = require("./debridge-cross-chain-provider");
const convert_gas_price_1 = require("../../utils/convert-gas-price");
const on_chain_trade_type_1 = require("../../../../on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
/**
 * Calculated DeBridge cross-chain trade.
 */
class DebridgeCrossChainTrade extends evm_cross_chain_trade_1.EvmCrossChainTrade {
    /** @internal */
    static async getGasData(from, toToken, transactionRequest, feeInfo, providerAddress, receiverAddress) {
        const fromBlockchain = from.blockchain;
        const walletAddress = injector_1.Injector.web3PrivateService.getWeb3PrivateByBlockchain(fromBlockchain).address;
        if (!walletAddress) {
            return null;
        }
        try {
            let gasLimit;
            let gasDetails;
            const web3Public = injector_1.Injector.web3PublicService.getWeb3Public(fromBlockchain);
            if (feeInfo.rubicProxy?.fixedFee?.amount.gt(0)) {
                const { contractAddress, contractAbi, methodName, methodArguments, value } = await new DebridgeCrossChainTrade({
                    from,
                    to: toToken,
                    transactionRequest,
                    gasData: null,
                    priceImpact: 0,
                    allowanceTarget: '',
                    slippage: 0,
                    feeInfo,
                    transitAmount: new bignumber_js_1.default(NaN),
                    toTokenAmountMin: new bignumber_js_1.default(NaN),
                    maxTheoreticalAmount: new bignumber_js_1.default(NaN),
                    cryptoFeeToken: from,
                    onChainTrade: null
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).getContractParams({}, true);
                const [proxyGasLimit, proxyGasDetails] = await Promise.all([
                    web3Public.getEstimatedGas(contractAbi, contractAddress, methodName, methodArguments, walletAddress, value),
                    (0, convert_gas_price_1.convertGasDataToBN)(await injector_1.Injector.gasPriceApi.getGasPrice(from.blockchain))
                ]);
                gasLimit = proxyGasLimit;
                gasDetails = proxyGasDetails;
            }
            else {
                const { tx } = await new DebridgeCrossChainTrade({
                    from,
                    to: toToken,
                    transactionRequest,
                    gasData: null,
                    priceImpact: 0,
                    allowanceTarget: '',
                    slippage: 0,
                    feeInfo,
                    transitAmount: new bignumber_js_1.default(NaN),
                    toTokenAmountMin: new bignumber_js_1.default(NaN),
                    maxTheoreticalAmount: new bignumber_js_1.default(NaN),
                    cryptoFeeToken: from,
                    onChainTrade: null
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).getTransactionRequest(receiverAddress, null, true);
                const defaultGasLimit = await web3Public.getEstimatedGasByData(walletAddress, tx.to, {
                    data: tx.data,
                    value: tx.value
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
            ? rubic_proxy_contract_address_1.rubicProxyContractAddress[this.fromBlockchain].gateway
            : this.allowanceTarget;
    }
    get methodName() {
        return 'startBridgeTokensViaGenericCrossChain';
    }
    constructor(crossChainTrade, providerAddress, routePath) {
        super(providerAddress, routePath);
        this.useProxyByDefault = false;
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.DEBRIDGE;
        this.isAggregator = false;
        this.onChainSubtype = {
            from: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH,
            to: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH
        };
        this.bridgeType = bridge_type_1.BRIDGE_TYPE.DEBRIDGE;
        this.from = crossChainTrade.from;
        this.to = crossChainTrade.to;
        this.transactionRequest = crossChainTrade.transactionRequest;
        this.gasData = crossChainTrade.gasData;
        this.priceImpact = crossChainTrade.priceImpact;
        this.allowanceTarget = crossChainTrade.allowanceTarget;
        this.slippage = crossChainTrade.slippage;
        this.onChainTrade = crossChainTrade.onChainTrade;
        this.toTokenAmountMin = crossChainTrade.toTokenAmountMin;
        this.feeInfo = crossChainTrade.feeInfo;
        this.cryptoFeeToken = crossChainTrade.cryptoFeeToken;
        this.transitAmount = crossChainTrade.transitAmount;
        this.maxTheoreticalAmount = crossChainTrade.maxTheoreticalAmount;
    }
    async swapDirect(options = {}) {
        this.checkWalletConnected();
        await this.checkAllowanceAndApprove(options);
        let transactionHash;
        try {
            const { tx } = await this.getTransactionRequest(options?.receiverAddress, options?.directTransaction);
            const { data, value, to } = tx;
            const { onConfirm } = options;
            const onTransactionHash = (hash) => {
                if (onConfirm) {
                    onConfirm(hash);
                }
                transactionHash = hash;
            };
            await this.web3Private.trySendTransaction(to, {
                onTransactionHash,
                data,
                value,
                gas: options.gasLimit,
                gasPrice: options.gasPrice,
                gasPriceOptions: options.gasPriceOptions
            });
            return transactionHash;
        }
        catch (err) {
            if (err?.error?.errorId === 'ERROR_LOW_GIVE_AMOUNT') {
                throw new errors_1.TooLowAmountError();
            }
            if (err instanceof errors_1.FailedToCheckForTransactionReceiptError) {
                return transactionHash;
            }
            throw (0, errors_2.parseError)(err);
        }
    }
    async getContractParams(options, skipAmountChangeCheck = false) {
        const { tx, fixFee } = await this.getTransactionRequest(options?.receiverAddress, options?.directTransaction, skipAmountChangeCheck);
        const { data, value: providerValue, to } = tx;
        const bridgeData = proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getBridgeData(options, {
            walletAddress: this.walletAddress,
            fromTokenAmount: this.from,
            toTokenAmount: this.to,
            srcChainTrade: null,
            providerAddress: this.providerAddress,
            type: `native:${this.type}`,
            fromAddress: this.walletAddress
        });
        const swapData = this.onChainTrade &&
            (await proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getSwapData(options, {
                walletAddress: this.walletAddress,
                contractAddress: rubic_proxy_contract_address_1.rubicProxyContractAddress[this.from.blockchain].router,
                fromTokenAmount: this.from,
                toTokenAmount: this.onChainTrade.to,
                onChainEncodeFn: this.onChainTrade.encode.bind(this.onChainTrade)
            }));
        const providerData = await proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getGenericProviderData(to, data, this.fromBlockchain, this.fromContractAddress, fixFee);
        const methodArguments = swapData
            ? [bridgeData, swapData, providerData]
            : [bridgeData, providerData];
        const value = this.getSwapValue(providerValue);
        const transactionConfiguration = evm_web3_pure_1.EvmWeb3Pure.encodeMethodCall(rubic_proxy_contract_address_1.rubicProxyContractAddress[this.from.blockchain].router, evm_common_cross_chain_abi_1.evmCommonCrossChainAbi, this.methodName, methodArguments, value);
        const sendingToken = this.from.isNative ? [] : [this.from.address];
        const sendingAmount = this.from.isNative ? [] : [this.from.stringWeiAmount];
        return {
            contractAddress: rubic_proxy_contract_address_1.rubicProxyContractAddress[this.from.blockchain].gateway,
            contractAbi: gateway_rubic_cross_chain_abi_1.gatewayRubicCrossChainAbi,
            methodName: 'startViaRubic',
            methodArguments: [sendingToken, sendingAmount, transactionConfiguration.data],
            value
        };
    }
    async getTransactionRequest(receiverAddress, transactionConfig, skipAmountChangeCheck = false) {
        if (transactionConfig) {
            return {
                tx: {
                    data: transactionConfig.data,
                    value: transactionConfig.value,
                    to: transactionConfig.to
                },
                fixFee: ''
            };
        }
        const walletAddress = this.web3Private.address;
        const params = {
            ...this.transactionRequest,
            ...(receiverAddress && { dstChainTokenOutRecipient: receiverAddress }),
            // @TODO Check proxy when deBridge proxy returned
            senderAddress: walletAddress,
            srcChainRefundAddress: walletAddress,
            dstChainOrderAuthorityAddress: receiverAddress || walletAddress,
            srcChainOrderAuthorityAddress: receiverAddress || walletAddress,
            referralCode: '4350'
        };
        const { tx, estimation, fixFee } = await injector_1.Injector.httpClient.get(`${debridge_cross_chain_provider_1.DebridgeCrossChainProvider.apiEndpoint}/order/create-tx`, { params });
        if (!skipAmountChangeCheck) {
            evm_cross_chain_trade_1.EvmCrossChainTrade.checkAmountChange(tx, estimation.dstChainTokenOut.amount, this.to.stringWeiAmount);
        }
        return { tx, fixFee };
    }
    getTradeInfo() {
        return {
            estimatedGas: this.estimatedGas,
            feeInfo: this.feeInfo,
            priceImpact: this.priceImpact ?? null,
            slippage: 0,
            routePath: this.routePath
        };
    }
    getTradeAmountRatio(fromUsd) {
        const usdCryptoFee = this.cryptoFeeToken.price.multipliedBy(this.cryptoFeeToken.tokenAmount);
        return fromUsd
            .plus(usdCryptoFee.isNaN() ? 0 : usdCryptoFee)
            .dividedBy(this.maxTheoreticalAmount);
    }
    getUsdPrice(providerFeeToken) {
        let feeSum = new bignumber_js_1.default(0);
        const providerFee = this.feeInfo.provider?.cryptoFee;
        if (providerFee) {
            feeSum = feeSum.plus(providerFee.amount.multipliedBy(providerFeeToken || providerFee.token.price));
        }
        return this.to.price.multipliedBy(this.maxTheoreticalAmount).minus(feeSum);
    }
}
exports.DebridgeCrossChainTrade = DebridgeCrossChainTrade;
//# sourceMappingURL=debridge-cross-chain-trade.js.map