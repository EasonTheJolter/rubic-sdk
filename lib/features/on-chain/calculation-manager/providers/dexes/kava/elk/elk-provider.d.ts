import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { ElkTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/kava/elk/elk-trade';
export declare class ElkProvider extends UniswapV2AbstractProvider<ElkTrade> {
    readonly blockchain: "KAVA";
    readonly UniswapV2TradeClass: typeof ElkTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
