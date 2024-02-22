import { L2Network } from '@arbitrum/sdk';
import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { ContractParams } from 'src/features/common/models/contract-params';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { EvmCrossChainTrade } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/evm-cross-chain-trade';
import { GasData } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/models/gas-data';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { GetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/models/get-contract-params-options';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { TradeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/trade-info';
import { TransactionReceipt } from 'web3-eth';
export declare class ArbitrumRbcBridgeTrade extends EvmCrossChainTrade {
    /** @internal */
    static getGasData(from: PriceTokenAmount<EvmBlockchainName>, to: PriceTokenAmount<EvmBlockchainName>, l2network: L2Network): Promise<GasData | null>;
    readonly onChainSubtype: {
        from: undefined;
        to: undefined;
    };
    readonly type: "arbitrum";
    readonly isAggregator = false;
    readonly bridgeType: "arbitrum";
    readonly from: PriceTokenAmount<EvmBlockchainName>;
    readonly to: PriceTokenAmount<EvmBlockchainName>;
    readonly toTokenAmountMin: BigNumber;
    readonly gasData: GasData | null;
    private get fromBlockchain();
    protected get fromContractAddress(): string;
    readonly feeInfo: FeeInfo;
    readonly onChainTrade: null;
    protected get methodName(): string;
    private readonly bridge;
    constructor(crossChainTrade: {
        from: PriceTokenAmount<EvmBlockchainName>;
        to: PriceTokenAmount<EvmBlockchainName>;
        gasData: GasData | null;
        l2network: L2Network;
    }, providerAddress: string, routePath: PathrStep[]);
    protected swapDirect(options?: SwapTransactionOptions): Promise<string | never>;
    getContractParams(options: GetContractParamsOptions): Promise<ContractParams>;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    getTradeInfo(): TradeInfo;
    static claimTargetTokens(sourceTransaction: string, options: SwapTransactionOptions): Promise<TransactionReceipt>;
    static redeemTokens(sourceTransactionHash: string, options: SwapTransactionOptions): Promise<TransactionReceipt>;
}
