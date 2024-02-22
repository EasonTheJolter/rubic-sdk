import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { AlgebraQuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/algebra/algebra-quoter-controller';
import { UniswapV3AlgebraTradeStructOmitPath } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-trade-struct';
import { UniswapV3AlgebraAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { QuickSwapV3Route } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/models/quick-swap-v3-route';
import { QuickSwapV3Trade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/quick-swap-v3-trade';
export declare class QuickSwapV3Provider extends UniswapV3AlgebraAbstractProvider<QuickSwapV3Trade> {
    protected readonly contractAddress = "0xf5b509bB0909a69B1c207E495f687a596C168E12";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    readonly blockchain: "POLYGON";
    protected readonly OnChainTradeClass: typeof QuickSwapV3Trade;
    protected readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    protected readonly quoterController: AlgebraQuoterController;
    get type(): OnChainTradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStructOmitPath, route: QuickSwapV3Route, providerAddress: string): QuickSwapV3Trade;
}
