import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { NetSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/metis/net-swap/net-swap-trade';
export declare class NetSwapProvider extends UniswapV2AbstractProvider<NetSwapTrade> {
    readonly blockchain: "METIS";
    readonly UniswapV2TradeClass: typeof NetSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
