import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { PangolinFujiTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/fuji/pangolin-fuji/pangolin-fuji-trade';
export declare class PangolinFujiProvider extends UniswapV2AbstractProvider<PangolinFujiTrade> {
    readonly blockchain: "FUJI";
    readonly UniswapV2TradeClass: typeof PangolinFujiTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
