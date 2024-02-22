import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { UniSwapV2EthereumTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/ethereum/uni-swap-v2-ethereum/uni-swap-v2-ethereum-trade';
export declare class UniSwapV2EthereumProvider extends UniswapV2AbstractProvider<UniSwapV2EthereumTrade> {
    readonly blockchain: "ETH";
    readonly UniswapV2TradeClass: typeof UniSwapV2EthereumTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
