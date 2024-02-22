import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SolarbeamTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/moonriver/solarbeam/solarbeam-trade';
export declare class SolarbeamProvider extends UniswapV2AbstractProvider<SolarbeamTrade> {
    readonly blockchain: "MOONRIVER";
    readonly UniswapV2TradeClass: typeof SolarbeamTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
