import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { TronBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { BridgersEvmCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/constants/bridgers-cross-chain-supported-blockchain';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { TradeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/trade-info';
import { TronContractParams } from 'src/features/cross-chain/calculation-manager/providers/common/tron-cross-chain-trade/models/tron-contract-params';
import { TronGetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/tron-cross-chain-trade/models/tron-get-contract-params-options';
import { TronCrossChainTrade } from 'src/features/cross-chain/calculation-manager/providers/common/tron-cross-chain-trade/tron-cross-chain-trade';
import { MarkRequired } from 'ts-essentials';
export declare class TronBridgersCrossChainTrade extends TronCrossChainTrade {
    readonly type: "bridgers";
    readonly isAggregator = false;
    readonly from: PriceTokenAmount<TronBlockchainName>;
    readonly to: PriceTokenAmount<BridgersEvmCrossChainSupportedBlockchain>;
    readonly toTokenAmountMin: BigNumber;
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
        from: PriceTokenAmount<TronBlockchainName>;
        to: PriceTokenAmount<BridgersEvmCrossChainSupportedBlockchain>;
        toTokenAmountMin: BigNumber;
        feeInfo: FeeInfo;
        slippage: number;
        contractAddress: string;
    }, providerAddress: string, routePath: PathrStep[]);
    swap(options: MarkRequired<SwapTransactionOptions, 'receiverAddress'>): Promise<string | never>;
    private swapDirect;
    protected getContractParams(options: TronGetContractParamsOptions): Promise<TronContractParams>;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    getTradeInfo(): TradeInfo;
}
