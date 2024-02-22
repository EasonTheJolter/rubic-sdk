"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViperSwapHarmonyProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/harmony/viper-swap-harmony/constants");
const viper_swap_harmony_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/harmony/viper-swap-harmony/viper-swap-harmony-trade");
class ViperSwapHarmonyProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.HARMONY;
        this.UniswapV2TradeClass = viper_swap_harmony_trade_1.ViperSwapHarmonyTrade;
        this.providerSettings = constants_1.VIPER_SWAP_HARMONY_PROVIDER_CONFIGURATION;
    }
}
exports.ViperSwapHarmonyProvider = ViperSwapHarmonyProvider;
//# sourceMappingURL=viper-swap-harmony-provider.js.map