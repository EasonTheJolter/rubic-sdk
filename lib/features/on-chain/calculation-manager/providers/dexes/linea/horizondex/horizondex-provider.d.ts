import { UniswapV3AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
import { HorizondexUniswapV3QuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/utils/quoter-controller/horizondex-uniswap-v3-quoter-controller';
import { HorizondexTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/linea/horizondex/horizondex-trade';
export declare class HorizondexProvider extends UniswapV3AbstractProvider<HorizondexTrade> {
    readonly blockchain: "LINEA";
    readonly OnChainTradeClass: typeof HorizondexTrade;
    readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    readonly routerConfiguration: import("../../common/uniswap-v3-abstract/models/uniswap-v3-router-configuration").UniswapV3RouterConfiguration<"BUSD" | "MATIC" | "BNB" | "WETH" | "HZN" | "NFTE">;
    protected readonly quoterController: HorizondexUniswapV3QuoterController;
}
