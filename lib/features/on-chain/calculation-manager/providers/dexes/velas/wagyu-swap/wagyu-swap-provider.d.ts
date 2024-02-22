import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { WagyuSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/velas/wagyu-swap/wagyu-swap-trade';
export declare class WagyuSwapProvider extends UniswapV2AbstractProvider<WagyuSwapTrade> {
    readonly blockchain: "VELAS";
    readonly UniswapV2TradeClass: typeof WagyuSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
