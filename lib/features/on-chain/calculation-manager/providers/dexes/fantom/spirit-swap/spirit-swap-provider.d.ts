import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SpiritSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/fantom/spirit-swap/spirit-swap-trade';
export declare class SpiritSwapProvider extends UniswapV2AbstractProvider<SpiritSwapTrade> {
    readonly blockchain: "FANTOM";
    readonly UniswapV2TradeClass: typeof SpiritSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
