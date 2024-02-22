import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SpookySwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/fantom/spooky-swap/spooky-swap-trade';
export declare class SpookySwapProvider extends UniswapV2AbstractProvider<SpookySwapTrade> {
    readonly blockchain: "FANTOM";
    readonly UniswapV2TradeClass: typeof SpookySwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
