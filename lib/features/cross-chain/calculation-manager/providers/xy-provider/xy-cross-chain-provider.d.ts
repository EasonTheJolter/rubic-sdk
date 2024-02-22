import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { XyCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/xy-provider/constants/xy-supported-blockchains';
import { XyTransactionResponse } from 'src/features/cross-chain/calculation-manager/providers/xy-provider/models/xy-transaction-response';
export declare class XyCrossChainProvider extends CrossChainProvider {
    static readonly apiEndpoint = "https://open-api.xy.finance/v1";
    readonly type: "xy";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is XyCrossChainSupportedBlockchain;
    calculate(fromToken: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getFeeInfo(fromBlockchain: XyCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private analyzeStatusCode;
    protected getRoutePath(fromToken: PriceTokenAmount, toToken: PriceTokenAmount, quote: XyTransactionResponse['quote']): Promise<PathrStep[]>;
}
