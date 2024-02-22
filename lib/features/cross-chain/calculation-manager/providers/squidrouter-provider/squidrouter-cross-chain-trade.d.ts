import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { ContractParams } from 'src/features/common/models/contract-params';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { EvmCrossChainTrade } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/evm-cross-chain-trade';
import { GasData } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/models/gas-data';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { GetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/models/get-contract-params-options';
import { OnChainSubtype } from 'src/features/cross-chain/calculation-manager/providers/common/models/on-chain-subtype';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { TradeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/trade-info';
import { SquidrouterTransactionRequest } from 'src/features/cross-chain/calculation-manager/providers/squidrouter-provider/models/transaction-request';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
/**
 * Calculated DeBridge cross-chain trade.
 */
export declare class SquidrouterCrossChainTrade extends EvmCrossChainTrade {
    /** @internal */
    readonly transitUSDAmount: BigNumber;
    private readonly cryptoFeeToken;
    private readonly slippage;
    private readonly onChainTrade;
    private readonly transactionRequest;
    /** @internal */
    static getGasData(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceTokenAmount<EvmBlockchainName>, transactionRequest: SquidrouterTransactionRequest, feeInfo: FeeInfo, receiverAddress: string, providerAddress: string): Promise<GasData | null>;
    readonly type: "squidrouter";
    readonly isAggregator = false;
    readonly onChainSubtype: OnChainSubtype;
    readonly bridgeType: "squidrouter";
    readonly from: PriceTokenAmount<EvmBlockchainName>;
    readonly to: PriceTokenAmount<EvmBlockchainName>;
    readonly toTokenAmountMin: BigNumber;
    readonly priceImpact: number | null;
    readonly allowanceTarget: string;
    readonly gasData: GasData | null;
    private get fromBlockchain();
    protected get fromContractAddress(): string;
    readonly feeInfo: FeeInfo;
    protected get methodName(): string;
    constructor(crossChainTrade: {
        from: PriceTokenAmount<EvmBlockchainName>;
        to: PriceTokenAmount<EvmBlockchainName>;
        gasData: GasData | null;
        priceImpact: number | null;
        allowanceTarget: string;
        slippage: number;
        feeInfo: FeeInfo;
        transitUSDAmount: BigNumber;
        cryptoFeeToken: PriceTokenAmount;
        onChainTrade: EvmOnChainTrade | null;
        onChainSubtype: OnChainSubtype;
        transactionRequest: SquidrouterTransactionRequest;
    }, providerAddress: string, routePath: PathrStep[]);
    protected swapDirect(options?: SwapTransactionOptions): Promise<string | never>;
    getContractParams(options: GetContractParamsOptions, skipAmountChangeCheck?: boolean): Promise<ContractParams>;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    getTradeInfo(): TradeInfo;
    private getTransactionRequest;
}
