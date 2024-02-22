import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapPolygonTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/sushi-swap-polygon/sushi-swap-polygon-trade';
export declare class SushiSwapPolygonProvider extends UniswapV2AbstractProvider<SushiSwapPolygonTrade> {
    readonly blockchain: "POLYGON";
    readonly UniswapV2TradeClass: typeof SushiSwapPolygonTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
