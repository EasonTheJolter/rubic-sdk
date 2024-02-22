import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SurfdexTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/kava/surfdex/surfdex-trade';
export declare class SurfdexProvider extends UniswapV2AbstractProvider<SurfdexTrade> {
    readonly blockchain: "KAVA";
    readonly UniswapV2TradeClass: typeof SurfdexTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
