"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArthSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const arth_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/astar-evm/arth-swap/arth-swap-trade");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/astar-evm/arth-swap/constants");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class ArthSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ASTAR_EVM;
        this.UniswapV2TradeClass = arth_swap_trade_1.ArthSwapTrade;
        this.providerSettings = constants_1.ARTH_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.ArthSwapProvider = ArthSwapProvider;
//# sourceMappingURL=arth-swap-provider.js.map