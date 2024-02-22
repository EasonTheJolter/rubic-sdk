"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapPolygonTrade = void 0;
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const uniswap_v2_abstract_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/sushi-swap-polygon/constants");
class SushiSwapPolygonTrade extends uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade {
    constructor() {
        super(...arguments);
        this.dexContractAddress = constants_1.SUSHI_SWAP_POLYGON_CONTRACT_ADDRESS;
    }
    static get type() {
        return on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP;
    }
}
exports.SushiSwapPolygonTrade = SushiSwapPolygonTrade;
//# sourceMappingURL=sushi-swap-polygon-trade.js.map