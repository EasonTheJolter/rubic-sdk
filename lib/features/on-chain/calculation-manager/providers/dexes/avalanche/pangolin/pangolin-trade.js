"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PangolinTrade = void 0;
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const avax_abi_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/avax-abi");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/pangolin/constants");
const swap_methods_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/swap-methods");
const uniswap_v2_abstract_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
class PangolinTrade extends uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade {
    constructor() {
        super(...arguments);
        this.dexContractAddress = constants_1.PANGOLIN_CONTRACT_ADDRESS;
    }
    static get type() {
        return on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.PANGOLIN;
    }
}
exports.PangolinTrade = PangolinTrade;
PangolinTrade.contractAbi = avax_abi_1.AVAX_ABI;
PangolinTrade.swapMethods = swap_methods_1.AVALANCHE_SWAP_METHOD;
//# sourceMappingURL=pangolin-trade.js.map