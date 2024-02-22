"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSwapV3Provider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const evm_web3_pure_1 = require("src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/evm-web3-pure");
const token_native_address_proxy_1 = require("src/features/common/utils/token-native-address-proxy");
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const algebra_quoter_controller_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/algebra/algebra-quoter-controller");
const uniswap_v3_algebra_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider");
const default_constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/default-constants");
const provider_configuration_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/constants/provider-configuration");
const swap_router_contract_data_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/constants/swap-router-contract-data");
const quick_swap_v3_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/quick-swap-v3-trade");
const quoter_contract_data_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/utils/quoter-controller/constants/quoter-contract-data");
class QuickSwapV3Provider extends uniswap_v3_algebra_abstract_provider_1.UniswapV3AlgebraAbstractProvider {
    constructor() {
        super(...arguments);
        this.contractAddress = swap_router_contract_data_1.QUICK_SWAP_V3_ROUTER_CONTRACT_ADDRESS;
        this.contractAbi = swap_router_contract_data_1.QUICK_SWAP_V3_ROUTER_CONTRACT_ABI;
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.POLYGON;
        this.OnChainTradeClass = quick_swap_v3_trade_1.QuickSwapV3Trade;
        this.providerConfiguration = provider_configuration_1.QUICK_SWAP_V3_PROVIDER_CONFIGURATION;
        this.quoterController = new algebra_quoter_controller_1.AlgebraQuoterController(this.blockchain, default_constants_1.defaultPolygonProviderConfiguration.routingProvidersAddresses, quoter_contract_data_1.QUICK_SWAP_V3_QUOTER_CONTRACT_ADDRESS, quoter_contract_data_1.QUICK_SWAP_V3_QUOTER_CONTRACT_ABI);
    }
    get type() {
        return on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.QUICK_SWAP_V3;
    }
    createTradeInstance(tradeStruct, route, providerAddress) {
        const path = (0, token_native_address_proxy_1.createTokenNativeAddressProxyInPathStartAndEnd)(route.path, evm_web3_pure_1.EvmWeb3Pure.nativeTokenAddress);
        return new quick_swap_v3_trade_1.QuickSwapV3Trade({
            ...tradeStruct,
            path,
            route
        }, providerAddress);
    }
}
exports.QuickSwapV3Provider = QuickSwapV3Provider;
//# sourceMappingURL=quick-swap-v3-provider.js.map