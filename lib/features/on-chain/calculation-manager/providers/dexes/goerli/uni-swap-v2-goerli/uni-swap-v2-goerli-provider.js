"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniSwapV2GoerliProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/goerli/uni-swap-v2-goerli/constants");
const uni_swap_v2_goerli_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/goerli/uni-swap-v2-goerli/uni-swap-v2-goerli-trade");
class UniSwapV2GoerliProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.GOERLI;
        this.UniswapV2TradeClass = uni_swap_v2_goerli_trade_1.UniSwapV2GoerliTrade;
        this.providerSettings = constants_1.UNISWAP_V2_GOERLI_PROVIDER_CONFIGURATION;
    }
}
exports.UniSwapV2GoerliProvider = UniSwapV2GoerliProvider;
//# sourceMappingURL=uni-swap-v2-goerli-provider.js.map