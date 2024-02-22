import { SushiSwapAvalancheTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/avalanche/sushi-swap-avalanche/sushi-swap-avalanche-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class SushiSwapAvalancheProvider extends UniswapV2AbstractProvider<SushiSwapAvalancheTrade> {
    readonly blockchain: "AVALANCHE";
    readonly UniswapV2TradeClass: typeof SushiSwapAvalancheTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
