import { WannaSwapAuroraTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/aurora/wanna-swap-aurora/wanna-swap-aurora-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class WannaSwapAuroraProvider extends UniswapV2AbstractProvider<WannaSwapAuroraTrade> {
    readonly blockchain: "AURORA";
    readonly UniswapV2TradeClass: typeof WannaSwapAuroraTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
