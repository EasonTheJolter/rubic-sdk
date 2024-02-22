import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { YuzuSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/oasis/yuzu-swap/yuzu-swap-trade';
export declare class YuzuSwapProvider extends UniswapV2AbstractProvider<YuzuSwapTrade> {
    readonly blockchain: "OASIS";
    readonly UniswapV2TradeClass: typeof YuzuSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
