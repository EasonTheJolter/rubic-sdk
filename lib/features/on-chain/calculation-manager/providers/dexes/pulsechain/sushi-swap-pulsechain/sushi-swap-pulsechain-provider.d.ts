import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapPulsechainTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/pulsechain/sushi-swap-pulsechain/sushi-swap-pulsechain-trade';
export declare class SushiSwapPulsechainProvider extends UniswapV2AbstractProvider<SushiSwapPulsechainTrade> {
    readonly blockchain: "PULSECHAIN";
    readonly UniswapV2TradeClass: typeof SushiSwapPulsechainTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
