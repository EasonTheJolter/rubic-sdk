"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapArbitrumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/arbitrum/sushi-swap-arbitrum/constants");
const sushi_swap_arbitrum_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/arbitrum/sushi-swap-arbitrum/sushi-swap-arbitrum-trade");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
class SushiSwapArbitrumProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ARBITRUM;
        this.UniswapV2TradeClass = sushi_swap_arbitrum_trade_1.SushiSwapArbitrumTrade;
        this.providerSettings = constants_1.SUSHI_SWAP_ARBITRUM_PROVIDER_CONFIGURATION;
    }
}
exports.SushiSwapArbitrumProvider = SushiSwapArbitrumProvider;
//# sourceMappingURL=sushi-swap-arbitrum-provider.js.map