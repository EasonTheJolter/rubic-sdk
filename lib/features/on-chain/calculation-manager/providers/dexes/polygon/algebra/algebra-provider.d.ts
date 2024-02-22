import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { AlgebraQuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/algebra/algebra-quoter-controller';
import { UniswapV3AlgebraTradeStructOmitPath } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-trade-struct';
import { UniswapV3AlgebraAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { AlgebraTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/algebra/algebra-trade';
import { AlgebraRoute } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/algebra/models/algebra-route';
export declare class AlgebraProvider extends UniswapV3AlgebraAbstractProvider<AlgebraTrade> {
    readonly contractAddress = "0x89D6B81A1Ef25894620D05ba843d83B0A296239e";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    readonly blockchain: "POLYGON";
    protected readonly OnChainTradeClass: typeof AlgebraTrade;
    protected readonly quoterController: AlgebraQuoterController;
    readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    get type(): OnChainTradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStructOmitPath, route: AlgebraRoute, providerAddress: string): AlgebraTrade;
}
