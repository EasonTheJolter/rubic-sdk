import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { MuteSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/zksync/mute-swap/mute-swap-trade';
export declare class MuteSwapProvider extends UniswapV2AbstractProvider<MuteSwapTrade> {
    readonly blockchain: "ZK_SYNC";
    readonly UniswapV2TradeClass: typeof MuteSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
