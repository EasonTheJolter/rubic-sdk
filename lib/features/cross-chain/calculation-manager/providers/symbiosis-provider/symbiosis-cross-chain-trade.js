"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbiosisCrossChainTrade = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const errors_1 = require("src/common/errors");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const blockchains_info_1 = require("src/core/blockchain/utils/blockchains-info/blockchains-info");
const evm_web3_pure_1 = require("src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/evm-web3-pure");
const web3_pure_1 = require("src/core/blockchain/web3-pure/web3-pure");
const injector_1 = require("src/core/injector/injector");
const cross_chain_trade_type_1 = require("src/features/cross-chain/calculation-manager/models/cross-chain-trade-type");
const pathr_proxy_contract_address_1 = require("src/features/cross-chain/calculation-manager/providers/common/constants/pathr-proxy-contract-address");
const evm_common_cross_chain_abi_1 = require("src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/constants/evm-common-cross-chain-abi");
const gateway_pathr_cross_chain_abi_1 = require("src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/constants/gateway-pathr-cross-chain-abi");
const evm_cross_chain_trade_1 = require("src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/evm-cross-chain-trade");
const bridge_type_1 = require("src/features/cross-chain/calculation-manager/providers/common/models/bridge-type");
const proxy_cross_chain_evm_trade_1 = require("src/features/cross-chain/calculation-manager/providers/common/proxy-cross-chain-evm-facade/proxy-cross-chain-evm-trade");
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const convert_gas_price_1 = require("../../utils/convert-gas-price");
/**
 * Calculated Symbiosis cross-chain trade.
 */
class SymbiosisCrossChainTrade extends evm_cross_chain_trade_1.EvmCrossChainTrade {
    /** @internal */
    static async getGasData(from, toToken, swapParams, feeInfo, providerGateway, providerAddress, receiverAddress) {
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
                const { contractAddress, contractAbi, methodName, methodArguments, value } = await new SymbiosisCrossChainTrade({
                    from,
                    to: toToken,
                    gasData: null,
                    priceImpact: 0,
                    slippage: 0,
                    feeInfo,
                    transitAmount: new bignumber_js_1.default(NaN),
                    tradeType: { in: undefined, out: undefined },
                    contractAddresses: {
                        providerRouter: '',
                        providerGateway: providerGateway
                    },
                    swapParams
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).getContractParams({}, true);
                const [proxyGasLimit, proxyGasDetails] = await Promise.all([
                    web3Public.getEstimatedGas(contractAbi, contractAddress, methodName, methodArguments, walletAddress, value),
                    (0, convert_gas_price_1.convertGasDataToBN)(await injector_1.Injector.gasPriceApi.getGasPrice(from.blockchain))
                ]);
                gasLimit = proxyGasLimit;
                gasDetails = proxyGasDetails;
            }
            else {
                const { data, value, to } = await new SymbiosisCrossChainTrade({
                    from,
                    to: toToken,
                    gasData: null,
                    priceImpact: 0,
                    slippage: 0,
                    feeInfo,
                    transitAmount: new bignumber_js_1.default(NaN),
                    tradeType: { in: undefined, out: undefined },
                    contractAddresses: {
                        providerRouter: '',
                        providerGateway: providerGateway
                    },
                    swapParams
                }, providerAddress || evm_web3_pure_1.EvmWeb3Pure.EMPTY_ADDRESS, []).getTransactionRequest(walletAddress, receiverAddress, null, true);
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
            : this.contractAddresses.providerGateway;
    }
    get methodName() {
        return 'startBridgeTokensViaGenericCrossChain';
    }
    get tronWeb3Public() {
        return injector_1.Injector.web3PublicService.getWeb3Public(blockchain_name_1.BLOCKCHAIN_NAME.TRON);
    }
    get evmWeb3Private() {
        return injector_1.Injector.web3PrivateService.getWeb3Private('EVM');
    }
    constructor(crossChainTrade, providerAddress, routePath) {
        super(providerAddress, routePath);
        this.type = cross_chain_trade_type_1.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS;
        this.isAggregator = false;
        this.bridgeType = bridge_type_1.BRIDGE_TYPE.SYMBIOSIS;
        this.from = crossChainTrade.from;
        this.to = crossChainTrade.to;
        this.swappingParams = crossChainTrade.swapParams;
        this.gasData = crossChainTrade.gasData;
        this.priceImpact = crossChainTrade.priceImpact;
        this.toTokenAmountMin = this.to.tokenAmount.multipliedBy(1 - crossChainTrade.slippage);
        this.feeInfo = crossChainTrade.feeInfo;
        this.slippage = crossChainTrade.slippage;
        this.transitAmount = crossChainTrade.transitAmount;
        this.onChainSubtype = SymbiosisCrossChainTrade.getSubtype(crossChainTrade.tradeType, crossChainTrade.to.blockchain);
        this.contractAddresses = crossChainTrade.contractAddresses;
    }
    async getContractParams(options, skipAmountChangeCheck = false) {
        const { data, value: providerValue, to } = await this.getTransactionRequest(this.walletAddress, options?.receiverAddress, options?.directTransaction, skipAmountChangeCheck);
        let receiverAddress = options.receiverAddress;
        let toAddress = '';
        if (this.to.blockchain === blockchain_name_1.BLOCKCHAIN_NAME.TRON) {
            receiverAddress = await this.tronWeb3Public.convertTronAddressToHex(options.receiverAddress);
            receiverAddress = `0x${receiverAddress.slice(2)}`;
            toAddress = await this.tronWeb3Public.convertTronAddressToHex(this.to.address);
            toAddress = `0x${toAddress.slice(2)}`;
        }
        const bridgeData = proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getBridgeData({ ...options, receiverAddress }, {
            walletAddress: this.walletAddress,
            fromTokenAmount: this.from,
            toTokenAmount: this.to,
            toAddress,
            srcChainTrade: null,
            providerAddress: this.providerAddress,
            type: `native:${this.type}`,
            fromAddress: this.walletAddress
        });
        const providerData = await proxy_cross_chain_evm_trade_1.ProxyCrossChainEvmTrade.getGenericProviderData(to, data, this.fromBlockchain, this.contractAddresses.providerGateway, '0');
        const methodArguments = [bridgeData, providerData];
        const value = this.getSwapValue(this.from.isNative ? this.from.stringWeiAmount : providerValue?.toString());
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
    /**
     * Used for direct provider swaps.
     * @param options Swap options
     */
    async swapDirect(options = {}) {
        await this.checkTradeErrors();
        await this.checkReceiverAddress(options.receiverAddress, !blockchains_info_1.BlockchainsInfo.isEvmBlockchainName(this.to.blockchain));
        await this.checkAllowanceAndApprove(options);
        const { onConfirm, gasLimit, gasPrice, gasPriceOptions } = options;
        let transactionHash;
        const onTransactionHash = (hash) => {
            if (onConfirm) {
                onConfirm(hash);
            }
            transactionHash = hash;
        };
        try {
            const { data, value, to } = await this.getTransactionRequest(this.walletAddress, options?.receiverAddress, options?.directTransaction);
            await this.evmWeb3Private.trySendTransaction(to, {
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
            if (err instanceof errors_1.FailedToCheckForTransactionReceiptError) {
                return transactionHash;
            }
            throw err;
        }
    }
    getTradeAmountRatio(fromUsd) {
        return fromUsd.dividedBy(this.to.tokenAmount);
    }
    getTradeInfo() {
        return {
            estimatedGas: this.estimatedGas,
            feeInfo: this.feeInfo,
            priceImpact: this.priceImpact ?? null,
            slippage: this.slippage * 100,
            routePath: this.routePath
        };
    }
    static getSubtype(tradeType, toBlockchain) {
        const mapping = {
            dex: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.SYMBIOSIS_SWAP,
            '1inch': on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.ONE_INCH,
            'open-ocean': on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.OPEN_OCEAN,
            wrap: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.WRAPPED,
            izumi: on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.IZUMI,
            default: undefined
        };
        return {
            from: mapping?.[tradeType?.in || 'default'],
            to: toBlockchain === blockchain_name_1.BLOCKCHAIN_NAME.BITCOIN
                ? on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.REN_BTC
                : mapping?.[tradeType?.out || 'default']
        };
    }
    async getTransactionRequest(walletAddress, receiverAddress, transactionConfig, skipAmountChangeCheck = false) {
        if (transactionConfig) {
            return {
                data: transactionConfig.data,
                value: transactionConfig.value,
                to: transactionConfig.to
            };
        }
        const tradeData = await injector_1.Injector.httpClient.post(`${SymbiosisCrossChainTrade.symbiosisApi}/swapping/exact_in?partnerId=pathr`, {
            ...this.swappingParams,
            from: walletAddress,
            to: walletAddress,
            revertableAddress: receiverAddress || walletAddress
        });
        const config = {
            data: tradeData.tx.data.toString(),
            value: tradeData.tx.value?.toString() || '0',
            to: tradeData.tx.to
        };
        if (!skipAmountChangeCheck) {
            evm_cross_chain_trade_1.EvmCrossChainTrade.checkAmountChange(config, tradeData.tokenAmountOut.amount, this.to.stringWeiAmount);
        }
        return config;
    }
}
exports.SymbiosisCrossChainTrade = SymbiosisCrossChainTrade;
SymbiosisCrossChainTrade.symbiosisApi = 'https://api-v2.symbiosis.finance/crosschain/v1';
//# sourceMappingURL=symbiosis-cross-chain-trade.js.map