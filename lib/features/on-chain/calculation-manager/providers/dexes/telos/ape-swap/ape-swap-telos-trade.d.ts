import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV2AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
export declare class ApeSwapTelosTrade extends UniswapV2AbstractTrade {
    static get type(): OnChainTradeType;
    readonly dexContractAddress = "0xb9667cf9a495a123b0c43b924f6c2244f42817be";
}
