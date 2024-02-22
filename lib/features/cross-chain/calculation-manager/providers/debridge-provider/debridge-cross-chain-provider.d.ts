import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { DeBridgeCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/debridge-provider/constants/debridge-cross-chain-supported-blockchain';
import { Estimation } from 'src/features/cross-chain/calculation-manager/providers/debridge-provider/models/estimation-response';
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
