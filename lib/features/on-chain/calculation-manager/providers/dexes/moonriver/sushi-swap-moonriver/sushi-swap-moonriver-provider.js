"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapMoonriverProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/moonriver/sushi-swap-moonriver/constants");
const sushi_swap_moonriver_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-trade");
class SushiSwapMoonriverProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.MOONRIVER;
        this.UniswapV2TradeClass = sushi_swap_moonriver_trade_1.SushiSwapMoonriverTrade;
        this.providerSettings = constants_1.SUSHI_SWAP_MOONRIVER_PROVIDER_CONFIGURATION;
    }
}
exports.SushiSwapMoonriverProvider = SushiSwapMoonriverProvider;
//# sourceMappingURL=sushi-swap-moonriver-provider.js.map