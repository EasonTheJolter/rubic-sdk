import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapEthereumTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/ethereum/sushi-swap-ethereum/sushi-swap-ethereum-trade';
export declare class SushiSwapEthereumProvider extends UniswapV2AbstractProvider<SushiSwapEthereumTrade> {
    readonly blockchain: "ETH";
    readonly UniswapV2TradeClass: typeof SushiSwapEthereumTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
