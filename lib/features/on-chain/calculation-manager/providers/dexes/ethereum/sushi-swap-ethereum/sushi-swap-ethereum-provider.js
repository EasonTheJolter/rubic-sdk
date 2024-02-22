"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapEthereumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const uniswap_v2_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/ethereum/sushi-swap-ethereum/constants");
const sushi_swap_ethereum_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/ethereum/sushi-swap-ethereum/sushi-swap-ethereum-trade");
class SushiSwapEthereumProvider extends uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM;
        this.UniswapV2TradeClass = sushi_swap_ethereum_trade_1.SushiSwapEthereumTrade;
        this.providerSettings = constants_1.SUSHI_SWAP_ETHEREUM_PROVIDER_CONFIGURATION;
    }
}
exports.SushiSwapEthereumProvider = SushiSwapEthereumProvider;
//# sourceMappingURL=sushi-swap-ethereum-provider.js.map