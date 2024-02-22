import { SushiSwapBscTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class SushiSwapBscProvider extends UniswapV2AbstractProvider<SushiSwapBscTrade> {
    readonly blockchain: "BSC";
    readonly UniswapV2TradeClass: typeof SushiSwapBscTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
