import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { AlgebraQuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/algebra/algebra-quoter-controller';
import { UniswapV3AlgebraTradeStructOmitPath } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-trade-struct';
import { UniswapV3AlgebraAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { AlgebraIntegralTrade } from './algebra-integral-trade';
import { AlgebraIntegralRoute } from './models/algebra-integral-route';
export declare class AlgebraIntegralProvider extends UniswapV3AlgebraAbstractProvider<AlgebraIntegralTrade> {
    protected readonly contractAddress = "0xa77aD9f635a3FB3bCCC5E6d1A87cB269746Aba17";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    readonly blockchain: "ARTHERA";
    protected readonly OnChainTradeClass: typeof AlgebraIntegralTrade;
    protected readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    protected readonly quoterController: AlgebraQuoterController;
    get type(): OnChainTradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStructOmitPath, route: AlgebraIntegralRoute, providerAddress: string): AlgebraIntegralTrade;
}
