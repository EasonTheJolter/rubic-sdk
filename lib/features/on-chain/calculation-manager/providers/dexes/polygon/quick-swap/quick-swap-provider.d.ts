import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { QuickSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap/quick-swap-trade';
export declare class QuickSwapProvider extends UniswapV2AbstractProvider<QuickSwapTrade> {
    readonly blockchain: "POLYGON";
    readonly UniswapV2TradeClass: typeof QuickSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
