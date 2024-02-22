import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapHarmonyTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/harmony/sushi-swap-harmony/sushi-swap-harmony-trade';
export declare class SushiSwapHarmonyProvider extends UniswapV2AbstractProvider<SushiSwapHarmonyTrade> {
    readonly blockchain: "HARMONY";
    readonly UniswapV2TradeClass: typeof SushiSwapHarmonyTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
