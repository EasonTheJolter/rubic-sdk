import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV3Route } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/models/uniswap-v3-route';
import { UniswapV3RouterConfiguration } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/models/uniswap-v3-router-configuration';
import { UniswapV3TradeClass } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/models/uniswap-v3-trade-class';
import { UniswapV3AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade';
import { UniswapV3QuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-abstract/utils/quoter-controller/uniswap-v3-quoter-controller';
import { UniswapV3AlgebraTradeStructOmitPath } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-trade-struct';
import { UniswapV3AlgebraAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
export declare abstract class UniswapV3AbstractProvider<T extends UniswapV3AbstractTrade = UniswapV3AbstractTrade> extends UniswapV3AlgebraAbstractProvider<T> {
    readonly contractAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    protected abstract readonly OnChainTradeClass: UniswapV3TradeClass<T>;
    protected abstract readonly routerConfiguration: UniswapV3RouterConfiguration<string>;
    protected readonly isPathrOptimisationEnabled: boolean;
    protected abstract readonly quoterController: UniswapV3QuoterController;
    get type(): OnChainTradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStructOmitPath, route: UniswapV3Route, providerAddress: string): T;
    private extractPath;
}
