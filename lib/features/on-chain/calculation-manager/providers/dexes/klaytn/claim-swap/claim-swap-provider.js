"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimSwapProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const claim_swap_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/klaytn/claim-swap/claim-swap-trade");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/klaytn/claim-swap/constants");
class ClaimSwapProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.KLAYTN;
        this.UniswapV2TradeClass = claim_swap_trade_1.ClaimSwapTrade;
        this.providerSettings = constants_1.CLAIM_SWAP_PROVIDER_CONFIGURATION;
    }
}
exports.ClaimSwapProvider = ClaimSwapProvider;
//# sourceMappingURL=claim-swap-provider.js.map