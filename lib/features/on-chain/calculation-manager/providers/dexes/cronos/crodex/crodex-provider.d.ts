import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { CrodexTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/cronos/crodex/crodex-trade';
export declare class CrodexProvider extends UniswapV2AbstractProvider<CrodexTrade> {
    readonly blockchain: "CRONOS";
    readonly UniswapV2TradeClass: typeof CrodexTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
