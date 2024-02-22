"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapBscProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/bsc/sushi-swap-bsc/constants");
const sushi_swap_bsc_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-trade");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class SushiSwapBscProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN;
        this.UniswapV2TradeClass = sushi_swap_bsc_trade_1.SushiSwapBscTrade;
        this.providerSettings = constants_1.SUSHI_SWAP_BSC_PROVIDER_CONFIGURATION;
    }
}
exports.SushiSwapBscProvider = SushiSwapBscProvider;
//# sourceMappingURL=sushi-swap-bsc-provider.js.map