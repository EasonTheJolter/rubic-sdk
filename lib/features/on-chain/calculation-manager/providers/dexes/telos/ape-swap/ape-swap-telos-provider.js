"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeSwapTelosProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const ape_swap_telos_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/telos/ape-swap/ape-swap-telos-trade");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/telos/ape-swap/constants");
class ApeSwapTelosProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.TELOS;
        this.UniswapV2TradeClass = ape_swap_telos_trade_1.ApeSwapTelosTrade;
        this.providerSettings = constants_1.APE_SWAP_TELOS_PROVIDER_CONFIGURATION;
    }
}
exports.ApeSwapTelosProvider = ApeSwapTelosProvider;
//# sourceMappingURL=ape-swap-telos-provider.js.map