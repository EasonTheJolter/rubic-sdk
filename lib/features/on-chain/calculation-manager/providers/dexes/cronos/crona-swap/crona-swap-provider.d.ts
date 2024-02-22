import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { CronaSwapTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/cronos/crona-swap/crona-swap-trade';
export declare class CronaSwapProvider extends UniswapV2AbstractProvider<CronaSwapTrade> {
    readonly blockchain: "CRONOS";
    readonly UniswapV2TradeClass: typeof CronaSwapTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
