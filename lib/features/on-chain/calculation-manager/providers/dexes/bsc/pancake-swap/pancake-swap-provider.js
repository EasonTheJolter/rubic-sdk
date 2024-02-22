"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/bsc/pancake-swap/constants");
const pancake_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/bsc/pancake-swap/pancake-swap-trade");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class PancakeSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN;
        this.UniswapV2TradeClass = pancake_swap_trade_1.PancakeSwapTrade;
        this.providerSettings = constants_1.PANCAKE_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.PancakeSwapProvider = PancakeSwapProvider;
//# sourceMappingURL=pancake-swap-provider.js.map