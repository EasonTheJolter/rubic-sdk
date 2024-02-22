"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrodexTrade = void 0;
const on_chain_trade_type_1 = require("src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type");
const uniswap_v2_abstract_trade_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
const constants_1 = require("src/features/on-chain/calculation-manager/providers/dexes/cronos/crodex/constants");
class CrodexTrade extends uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade {
    constructor() {
        super(...arguments);
        this.dexContractAddress = constants_1.CRODEX_CONTRACT_ADDRESS;
    }
    static get type() {
        return on_chain_trade_type_1.ON_CHAIN_TRADE_TYPE.CRO_DEX;
    }
}
exports.CrodexTrade = CrodexTrade;
//# sourceMappingURL=crodex-trade.js.map