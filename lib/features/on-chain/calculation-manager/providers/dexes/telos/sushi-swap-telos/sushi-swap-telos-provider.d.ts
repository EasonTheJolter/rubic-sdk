import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapTelosTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/telos/sushi-swap-telos/sushi-swap-telos-trade';
export declare class SushiSwapTelosProvider extends UniswapV2AbstractProvider<SushiSwapTelosTrade> {
    readonly blockchain: "TELOS";
    readonly UniswapV2TradeClass: typeof SushiSwapTelosTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
