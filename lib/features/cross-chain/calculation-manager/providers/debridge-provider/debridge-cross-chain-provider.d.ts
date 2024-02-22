import { PriceToken, PriceTokenAmount } from "../../../../../common/tokens";
import { BlockchainName, EvmBlockchainName } from "../../../../../core/blockchain/models/blockchain-name";
import { RequiredCrossChainOptions } from "../../models/cross-chain-options";
import { CrossChainProvider } from "../common/cross-chain-provider";
import { CalculationResult } from "../common/models/calculation-result";
import { FeeInfo } from "../common/models/fee-info";
import { PathrStep } from "../common/models/pathrStep";
import { DeBridgeCrossChainSupportedBlockchain } from "./constants/debridge-cross-chain-supported-blockchain";
import { Estimation } from "./models/estimation-response";
export declare class DebridgeCrossChainProvider extends CrossChainProvider {
    static readonly apiEndpoint = "https://api.dln.trade/v1.0/dln";
    readonly type: "dln";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is DeBridgeCrossChainSupportedBlockchain;
    private static getDeBridgeGateAddress;
    private static getCryptoFeeAmount;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getFeeInfo(fromBlockchain: DeBridgeCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private parseDebridgeApiError;
    protected getRoutePath(estimation: Estimation, from: PriceTokenAmount, to: PriceTokenAmount): Promise<PathrStep[]>;
}
