import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { ApeSwapTelosTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/telos/ape-swap/ape-swap-telos-trade';
export declare class ApeSwapTelosProvider extends UniswapV2AbstractProvider<ApeSwapTelosTrade> {
    readonly blockchain: "TELOS";
    readonly UniswapV2TradeClass: typeof ApeSwapTelosTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
