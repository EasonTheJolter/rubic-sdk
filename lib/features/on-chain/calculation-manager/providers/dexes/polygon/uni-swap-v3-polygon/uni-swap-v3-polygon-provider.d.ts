import { UniswapV3AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
import { UniswapV3QuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/utils/quoter-controller/uniswap-v3-quoter-controller';
import { UniSwapV3PolygonTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/uni-swap-v3-polygon/uni-swap-v3-polygon-trade';
export declare class UniSwapV3PolygonProvider extends UniswapV3AbstractProvider<UniSwapV3PolygonTrade> {
    readonly blockchain: "POLYGON";
    protected readonly OnChainTradeClass: typeof UniSwapV3PolygonTrade;
    protected readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    protected readonly routerConfiguration: import("../../common/uniswap-v3-abstract/models/uniswap-v3-router-configuration").UniswapV3RouterConfiguration<"USDT" | "USDC" | "WETH" | "WMATIC" | "DAI">;
    protected readonly quoterController: UniswapV3QuoterController;
}
