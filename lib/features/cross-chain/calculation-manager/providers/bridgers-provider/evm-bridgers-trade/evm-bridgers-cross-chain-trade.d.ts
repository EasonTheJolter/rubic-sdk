import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { TronBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { ContractParams } from 'src/features/common/models/contract-params';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { BridgersEvmCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/constants/bridgers-cross-chain-supported-blockchain';
import { EvmCrossChainTrade } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/evm-cross-chain-trade';
import { GasData } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/models/gas-data';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { GetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/models/get-contract-params-options';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { TradeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/trade-info';
import { MarkRequired } from 'ts-essentials';
import { TransactionConfig } from 'web3-core';
export declare class EvmBridgersCrossChainTrade extends EvmCrossChainTrade {
    /** @internal */
    static getGasData(from: PriceTokenAmount<BridgersEvmCrossChainSupportedBlockchain>, to: PriceTokenAmount<TronBlockchainName>, receiverAddress: string, providerAddress: string, feeInfo: FeeInfo, toTokenAmountMin: BigNumber): Promise<GasData | null>;
    readonly type: "bridgers";
    readonly isAggregator = false;
    readonly from: PriceTokenAmount<BridgersEvmCrossChainSupportedBlockchain>;
    readonly to: PriceTokenAmount<TronBlockchainName>;
    readonly toTokenAmountMin: BigNumber;
    readonly gasData: GasData;
    readonly feeInfo: FeeInfo;
    readonly onChainSubtype: {
        from: undefined;
        to: undefined;
    };
    readonly bridgeType: "bridgers";
    readonly priceImpact: number | null;
    private readonly slippage;
    private readonly contractAddress;
    protected get fromContractAddress(): string;
    protected get methodName(): string;
    constructor(crossChainTrade: {
        from: PriceTokenAmount<BridgersEvmCrossChainSupportedBlockchain>;
        to: PriceTokenAmount<TronBlockchainName>;
        toTokenAmountMin: BigNumber;
        feeInfo: FeeInfo;
        gasData: GasData;
        slippage: number;
        contractAddress: string;
    }, providerAddress: string, routePath: PathrStep[]);
    protected swapDirect(options: MarkRequired<SwapTransactionOptions, 'receiverAddress'>): Promise<string | never>;
    encode(options: MarkRequired<EncodeTransactionOptions, 'receiverAddress'>): Promise<TransactionConfig>;
    protected getContractParams(options: MarkRequired<GetContractParamsOptions, 'receiverAddress'>): Promise<ContractParams>;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    getTradeInfo(): TradeInfo;
}
