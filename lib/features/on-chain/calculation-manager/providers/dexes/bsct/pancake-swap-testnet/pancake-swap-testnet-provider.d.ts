import { PancakeSwapTestnetTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/bsct/pancake-swap-testnet/pancake-swap-testnet-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class PancakeSwapTestnetProvider extends UniswapV2AbstractProvider<PancakeSwapTestnetTrade> {
    readonly blockchain: "BSCT";
    readonly UniswapV2TradeClass: typeof PancakeSwapTestnetTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
