"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveCeloProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const curve_celo_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/celo/curve-celo/curve-celo-trade");
const curve_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider");
class CurveCeloProvider extends curve_abstract_provider_1.CurveAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.CELO;
        this.Trade = curve_celo_trade_1.CurveCeloTrade;
    }
}
exports.CurveCeloProvider = CurveCeloProvider;
//# sourceMappingURL=curve-celo-provider.js.map