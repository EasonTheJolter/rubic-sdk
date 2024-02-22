import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { PhotonSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/kava/photon-swap/photon-swap-trade';
export declare class PhotonSwapProvider extends UniswapV2AbstractProvider<PhotonSwapTrade> {
    readonly blockchain: "KAVA";
    readonly UniswapV2TradeClass: typeof PhotonSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
