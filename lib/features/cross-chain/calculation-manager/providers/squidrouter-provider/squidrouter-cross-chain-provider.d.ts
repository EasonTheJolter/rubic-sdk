import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { SquidrouterCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/squidrouter-provider/constants/squidrouter-cross-chain-supported-blockchain';
import { SquidrouterEstimation } from 'src/features/cross-chain/calculation-manager/providers/squidrouter-provider/models/estimation-response';
export declare class SquidrouterCrossChainProvider extends CrossChainProvider {
    static readonly apiEndpoint = "https://api.0xsquid.com/v1/";
    private readonly nativeAddress;
    readonly type: "squidrouter";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is SquidrouterCrossChainSupportedBlockchain;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getFeeInfo(fromBlockchain: SquidrouterCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    protected getRoutePath(estimation: SquidrouterEstimation, from: PriceTokenAmount, to: PriceTokenAmount): Promise<PathrStep[]>;
}
