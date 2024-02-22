"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrodexProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/cronos/crodex/constants");
const crodex_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/cronos/crodex/crodex-trade");
class CrodexProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.CRONOS;
        this.UniswapV2TradeClass = crodex_trade_1.CrodexTrade;
        this.providerSettings = constants_1.CRODEX_PROVIDER_CONFIGURATION;
    }
}
exports.CrodexProvider = CrodexProvider;
//# sourceMappingURL=crodex-provider.js.map