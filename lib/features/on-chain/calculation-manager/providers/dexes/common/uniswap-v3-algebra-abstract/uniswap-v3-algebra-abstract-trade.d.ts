import BigNumber from 'bignumber.js';
import { PriceToken } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { MethodData } from 'src/core/blockchain/web3-public-service/web3-public/models/method-data';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { Exact } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/exact';
import { CreateTradeInstance } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/create-trade-instance';
import { UniswapV3AlgebraRoute } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-route';
import { UniswapV3AlgebraTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-trade-struct';
import { UnwrapWethMethodName } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v3-algebra-abstract/models/unwrapWethMethodName';
import { AbiItem } from 'web3-utils';
interface EstimateGasOptions {
    slippageTolerance: number;
    deadlineMinutes: number;
}
export declare abstract class UniswapV3AlgebraAbstractTrade extends EvmOnChainTrade {
    static get type(): OnChainTradeType;
    static estimateGasLimitForRoute(fromToken: PriceToken<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, exact: Exact, weiAmount: BigNumber, options: EstimateGasOptions, route: UniswapV3AlgebraRoute, createTradeInstance: CreateTradeInstance): Promise<BigNumber>;
    static estimateGasLimitForRoutes(fromToken: PriceToken<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, exact: Exact, weiAmount: BigNumber, options: EstimateGasOptions, routes: UniswapV3AlgebraRoute[], createTradeInstance: CreateTradeInstance): Promise<BigNumber[]>;
    private static getEstimateGasParams;
    protected abstract readonly contractAbi: AbiItem[];
    protected abstract readonly unwrapWethMethodName: UnwrapWethMethodName;
    protected readonly exact: Exact;
    deadlineMinutes: number;
    get type(): OnChainTradeType;
    protected get deadlineMinutesTimestamp(): number;
    private get defaultEstimatedGas();
    protected constructor(tradeStruct: UniswapV3AlgebraTradeStruct, providerAddress: string);
    protected getAmountParams(): [string, string];
    /**
     * Returns swap `exactInput` method's name and arguments to use in `swap contract`.
     */
    protected abstract getSwapRouterExactInputMethodData(walletAddress: string): MethodData;
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    private getSwapRouterMethodData;
    /**
     * Returns encoded data of estimated gas function and default estimated gas.
     */
    private getEstimateGasParams;
}
export {};
