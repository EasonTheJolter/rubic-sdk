import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { UniSwapV2GoerliTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/goerli/uni-swap-v2-goerli/uni-swap-v2-goerli-trade';
export declare class UniSwapV2GoerliProvider extends UniswapV2AbstractProvider<UniSwapV2GoerliTrade> {
    readonly blockchain: "GOERLI";
    readonly UniswapV2TradeClass: typeof UniSwapV2GoerliTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
