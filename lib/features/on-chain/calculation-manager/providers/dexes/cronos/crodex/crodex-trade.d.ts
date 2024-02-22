import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV2AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
export declare class CrodexTrade extends UniswapV2AbstractTrade {
    static get type(): OnChainTradeType;
    readonly dexContractAddress = "0xeC0A7a0C2439E8Cb67b992b12ecd020Ea943c7Be";
}
