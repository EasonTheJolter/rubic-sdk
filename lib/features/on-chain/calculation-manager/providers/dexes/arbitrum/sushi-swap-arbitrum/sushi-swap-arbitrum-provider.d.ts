import { SushiSwapArbitrumTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/arbitrum/sushi-swap-arbitrum/sushi-swap-arbitrum-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class SushiSwapArbitrumProvider extends UniswapV2AbstractProvider<SushiSwapArbitrumTrade> {
    readonly blockchain: "ARBITRUM";
    readonly UniswapV2TradeClass: typeof SushiSwapArbitrumTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
