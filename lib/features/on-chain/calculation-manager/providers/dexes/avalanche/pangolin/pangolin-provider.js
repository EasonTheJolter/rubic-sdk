"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PangolinProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/pangolin/constants");
const pangolin_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/pangolin/pangolin-trade");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class PangolinProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.AVALANCHE;
        this.UniswapV2TradeClass = pangolin_trade_1.PangolinTrade;
        this.providerSettings = constants_1.PANGOLIN_PROVIDER_CONFIGURATION;
    }
}
exports.PangolinProvider = PangolinProvider;
//# sourceMappingURL=pangolin-provider.js.map