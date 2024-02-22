import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { OmnidexTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/telos/omnidex/omnidex-trade';
export declare class OmnidexProvider extends UniswapV2AbstractProvider<OmnidexTrade> {
    readonly blockchain: "TELOS";
    readonly UniswapV2TradeClass: typeof OmnidexTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
