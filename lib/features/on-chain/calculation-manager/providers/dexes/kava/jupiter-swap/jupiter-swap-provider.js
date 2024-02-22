"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JupiterSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/kava/jupiter-swap/constants");
const jupiter_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/kava/jupiter-swap/jupiter-swap-trade");
class JupiterSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.KAVA;
        this.UniswapV2TradeClass = jupiter_swap_trade_1.JupiterSwapTrade;
        this.providerSettings = constants_1.JUPITER_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.JupiterSwapProvider = JupiterSwapProvider;
//# sourceMappingURL=jupiter-swap-provider.js.map