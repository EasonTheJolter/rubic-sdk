"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarbeamProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/moonriver/solarbeam/constants");
const solarbeam_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/moonriver/solarbeam/solarbeam-trade");
class SolarbeamProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.MOONRIVER;
        this.UniswapV2TradeClass = solarbeam_trade_1.SolarbeamTrade;
        this.providerSettings = constants_1.SOLARBEAM_PROVIDER_CONFIGURATION;
    }
}
exports.SolarbeamProvider = SolarbeamProvider;
//# sourceMappingURL=solarbeam-provider.js.map