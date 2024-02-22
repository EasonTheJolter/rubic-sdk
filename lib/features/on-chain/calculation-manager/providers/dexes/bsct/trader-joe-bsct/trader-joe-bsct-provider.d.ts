import { TraderJoeBsctTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/bsct/trader-joe-bsct/trader-joe-bsct-trade';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class TraderJoeBsctProvider extends UniswapV2AbstractProvider<TraderJoeBsctTrade> {
    readonly blockchain: "BSCT";
    readonly UniswapV2TradeClass: typeof TraderJoeBsctTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
