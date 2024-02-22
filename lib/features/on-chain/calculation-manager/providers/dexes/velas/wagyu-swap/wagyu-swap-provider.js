"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WagyuSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/velas/wagyu-swap/constants");
const wagyu_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/velas/wagyu-swap/wagyu-swap-trade");
class WagyuSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.VELAS;
        this.UniswapV2TradeClass = wagyu_swap_trade_1.WagyuSwapTrade;
        this.providerSettings = constants_1.WAGYU_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.WagyuSwapProvider = WagyuSwapProvider;
//# sourceMappingURL=wagyu-swap-provider.js.map