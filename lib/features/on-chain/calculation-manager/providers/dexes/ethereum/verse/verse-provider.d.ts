import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { VerseTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/ethereum/verse/verse-trade';
export declare class VerseProvider extends UniswapV2AbstractProvider<VerseTrade> {
    readonly blockchain: "ETH";
    readonly UniswapV2TradeClass: typeof VerseTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
