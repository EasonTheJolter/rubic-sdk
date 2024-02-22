import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { SymbiosisCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/symbiosis-provider/constants/symbiosis-cross-chain-supported-blockchain';
import { SymbiosisToken } from 'src/features/cross-chain/calculation-manager/providers/symbiosis-provider/models/symbiosis-trade-data';
export declare class SymbiosisCrossChainProvider extends CrossChainProvider {
    readonly type: "symbiosis";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is SymbiosisCrossChainSupportedBlockchain;
    areSupportedBlockchains(fromBlockchain: BlockchainName, toBlockchain: BlockchainName): boolean;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private checkMinMaxErrors;
    protected getFeeInfo(fromBlockchain: SymbiosisCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private getTransferToken;
    protected getRoutePath(fromToken: PriceTokenAmount, toToken: PriceTokenAmount, route: SymbiosisToken[]): Promise<PathrStep[]>;
}
