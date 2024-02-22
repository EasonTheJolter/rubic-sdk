import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapMoonriverTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-trade';
export declare class SushiSwapMoonriverProvider extends UniswapV2AbstractProvider<SushiSwapMoonriverTrade> {
    readonly blockchain: "MOONRIVER";
    readonly UniswapV2TradeClass: typeof SushiSwapMoonriverTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
