"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerseProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/ethereum/verse/constants");
const verse_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/ethereum/verse/verse-trade");
class VerseProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM;
        this.UniswapV2TradeClass = verse_trade_1.VerseTrade;
        this.providerSettings = constants_1.VERSE_PROVIDER_CONFIGURATION;
    }
}
exports.VerseProvider = VerseProvider;
//# sourceMappingURL=verse-provider.js.map