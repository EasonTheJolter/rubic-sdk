import { ArthSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/astar-evm/arth-swap/arth-swap-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class ArthSwapProvider extends UniswapV2AbstractProvider<ArthSwapTrade> {
    readonly blockchain: "ASTAR_EVM";
    readonly UniswapV2TradeClass: typeof ArthSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
