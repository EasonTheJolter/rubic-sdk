import { Token } from 'src/common/tokens';
import { MethodData } from 'src/core/blockchain/web3-public-service/web3-public/models/method-data';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV3AlgebraAbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
import { QuickSwapV3TradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/quick-swap-v3/models/quick-swap-v3-trade-struct';
export declare class QuickSwapV3Trade extends UniswapV3AlgebraAbstractTrade {
    static get type(): OnChainTradeType;
    readonly dexContractAddress = "0xf5b509bB0909a69B1c207E495f687a596C168E12";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    protected readonly unwrapWethMethodName = "unwrapWNativeToken";
    private readonly route;
    readonly wrappedPath: ReadonlyArray<Token>;
    constructor(tradeStruct: QuickSwapV3TradeStruct, providerAddress: string);
    /**
     * Returns swap `exactInput` method's name and arguments to use in Swap contract.
     */
    protected getSwapRouterExactInputMethodData(walletAddress: string): MethodData;
}
