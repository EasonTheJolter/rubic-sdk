import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { QuickSwapMumbaiTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/mumbai/quick-swap-mumbai/quick-swap-mumbai-trade';
export declare class QuickSwapMumbaiProvider extends UniswapV2AbstractProvider<QuickSwapMumbaiTrade> {
    readonly blockchain: "MUMBAI";
    readonly UniswapV2TradeClass: typeof QuickSwapMumbaiTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
