"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CroSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/cronos/cro-swap/constants");
const cro_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/cronos/cro-swap/cro-swap-trade");
class CroSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.CRONOS;
        this.UniswapV2TradeClass = cro_swap_trade_1.CroSwapTrade;
        this.providerSettings = constants_1.CRO_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.CroSwapProvider = CroSwapProvider;
//# sourceMappingURL=cro-swap-provider.js.map