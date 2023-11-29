import { PriceToken, PriceTokenAmount } from "../../../../../common/tokens";
import { BlockchainName, EvmBlockchainName } from "../../../../../core/blockchain/models/blockchain-name";
import { RequiredCrossChainOptions } from "../../models/cross-chain-options";
import { CrossChainProvider } from "../common/cross-chain-provider";
import { CalculationResult } from "../common/models/calculation-result";
import { FeeInfo } from "../common/models/fee-info";
import { RubicStep } from "../common/models/rubicStep";
import { SymbiosisCrossChainSupportedBlockchain } from "./constants/symbiosis-cross-chain-supported-blockchain";
import { SymbiosisToken } from "./models/symbiosis-trade-data";
export declare class SymbiosisCrossChainProvider extends CrossChainProvider {
    readonly type: "symbiosis";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is SymbiosisCrossChainSupportedBlockchain;
    areSupportedBlockchains(fromBlockchain: BlockchainName, toBlockchain: BlockchainName): boolean;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private checkMinMaxErrors;
    protected getFeeInfo(fromBlockchain: SymbiosisCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private getTransferToken;
    protected getRoutePath(fromToken: PriceTokenAmount, toToken: PriceTokenAmount, route: SymbiosisToken[]): Promise<RubicStep[]>;
}
