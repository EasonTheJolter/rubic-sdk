"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OolongSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/boba/oolong-swap/constants");
const oolong_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/boba/oolong-swap/oolong-swap-trade");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class OolongSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.BOBA;
        this.UniswapV2TradeClass = oolong_swap_trade_1.OolongSwapTrade;
        this.providerSettings = constants_1.OOLONG_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.OolongSwapProvider = OolongSwapProvider;
//# sourceMappingURL=oolong-swap-provider.js.map