import { Route } from '@lifi/sdk';
import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { ContractParams } from 'src/features/common/models/contract-params';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { EvmCrossChainTrade } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/evm-cross-chain-trade';
import { GasData } from 'src/features/cross-chain/calculation-manager/providers/common/emv-cross-chain-trade/models/gas-data';
import { BridgeType } from 'src/features/cross-chain/calculation-manager/providers/common/models/bridge-type';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { GetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/models/get-contract-params-options';
import { OnChainSubtype } from 'src/features/cross-chain/calculation-manager/providers/common/models/on-chain-subtype';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { TradeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/trade-info';
/**
 * Calculated Celer cross-chain trade.
 */
export declare class LifiCrossChainTrade extends EvmCrossChainTrade {
    /** @internal */
    static getGasData(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceTokenAmount<EvmBlockchainName>, route: Route, feeInfo: FeeInfo, providerAddress: string, receiverAddress?: string): Promise<GasData | null>;
    readonly type: "lifi";
    readonly isAggregator = true;
    readonly from: PriceTokenAmount<EvmBlockchainName>;
    readonly to: PriceTokenAmount<EvmBlockchainName>;
    readonly toTokenAmountMin: BigNumber;
    readonly gasData: GasData | null;
    private readonly route;
    private readonly providerGateway;
    readonly onChainSubtype: OnChainSubtype;
    readonly bridgeType: BridgeType;
    readonly priceImpact: number | null;
    readonly feeInfo: FeeInfo;
    private readonly slippage;
    private get fromBlockchain();
    get fromContractAddress(): string;
    protected get methodName(): string;
    constructor(crossChainTrade: {
        from: PriceTokenAmount<EvmBlockchainName>;
        to: PriceTokenAmount<EvmBlockchainName>;
        route: Route;
        gasData: GasData | null;
        toTokenAmountMin: BigNumber;
        feeInfo: FeeInfo;
        priceImpact: number | null;
        onChainSubtype: OnChainSubtype;
        bridgeType: BridgeType;
        slippage: number;
    }, providerAddress: string, routePath: PathrStep[]);
    protected swapDirect(options?: SwapTransactionOptions): Promise<string | never>;
    getContractParams(options: GetContractParamsOptions, skipAmountChangeCheck?: boolean): Promise<ContractParams>;
    private fetchSwapData;
    getTradeAmountRatio(fromUsd: BigNumber): BigNumber;
    getTradeInfo(): TradeInfo;
}
