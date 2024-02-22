import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV2AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
export declare class AstroSwapTrade extends UniswapV2AbstractTrade {
    static get type(): OnChainTradeType;
    readonly dexContractAddress = "0x3328cd3a9A295cd00fBb1d71Bf097e002B4614ad";
}
