"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuzuSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/oasis/yuzu-swap/constants");
const yuzu_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/oasis/yuzu-swap/yuzu-swap-trade");
class YuzuSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.OASIS;
        this.UniswapV2TradeClass = yuzu_swap_trade_1.YuzuSwapTrade;
        this.providerSettings = constants_1.YUZU_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.YuzuSwapProvider = YuzuSwapProvider;
//# sourceMappingURL=yuzu-swap-provider.js.map