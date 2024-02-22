"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoulSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/fantom/soul-swap/constants");
const soul_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/fantom/soul-swap/soul-swap-trade");
class SoulSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.FANTOM;
        this.UniswapV2TradeClass = soul_swap_trade_1.SoulSwapTrade;
        this.providerSettings = constants_1.SOUL_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.SoulSwapProvider = SoulSwapProvider;
//# sourceMappingURL=soul-swap-provider.js.map