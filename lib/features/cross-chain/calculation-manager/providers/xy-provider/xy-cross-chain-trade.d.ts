import BigNumber from 'bignumber.js';
import { BytesLike } from 'ethers';
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
import { XyTransactionRequest } from 'src/features/cross-chain/calculation-manager/providers/xy-provider/models/xy-transaction-request';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
/**
 * Calculated XY cross-chain trade.
 */
export declare class XyCrossChainTrade extends EvmCrossChainTrade {
    /** @internal */
    static getGasData(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceTokenAmount<EvmBlockchainName>, transactionRequest: XyTransactionRequest, feeInfo: FeeInfo, providerAddress: string, receiverAddress?: string): Promise<GasData | null>;
    static readonly nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    readonly type: "xy";
    readonly isAggregator = false;
    readonly onChainSubtype: {
        from: undefined;
        to: undefined;
    };
    readonly bridgeType: "xy";
    readonly from: PriceTokenAmount<EvmBlockchainName>;
    readonly to: PriceTokenAmount<EvmBlockchainName>;
    readonly toTokenAmountMin: BigNumber;
    readonly priceImpact: number | null;
    readonly gasData: GasData | null;
    private readonly transactionRequest;
    private get fromBlockchain();
    protected get fromContractAddress(): string;
    readonly feeInfo: FeeInfo;
    private readonly slippage;
    protected get methodName(): string;
    private readonly onChainTrade;
    constructor(crossChainTrade: {
        from: PriceTokenAmount<EvmBlockchainName>;
        to: PriceTokenAmount<EvmBlockchainName>;
        transactionRequest: XyTransactionRequest;
        gasData: GasData | null;
        priceImpact: number | null;
        slippage: number;
        feeInfo: FeeInfo;
        onChainTrade: EvmOnChainTrade | null;
    }, providerAddress: string, routePath: PathrStep[]);
    protected swapDirect(options?: SwapTransactionOptions): Promise<string | never>;
    getContractParams(options: GetContractParamsOptions, skipAmountChangeCheck?: boolean): Promise<ContractParams>;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    private getTransactionRequest;
    getTradeInfo(): TradeInfo;
    protected getProviderData(_sourceData: BytesLike): unknown[];
}
