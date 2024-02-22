import { Route } from '@lifi/sdk';
import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { LifiCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/lifi-provider/constants/lifi-cross-chain-supported-blockchain';
export declare class LifiCrossChainProvider extends CrossChainProvider {
    readonly type: "lifi";
    private readonly lifi;
    private readonly MIN_AMOUNT_USD;
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is LifiCrossChainSupportedBlockchain;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private checkMinError;
    protected getFeeInfo(fromBlockchain: LifiCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private parseTradeTypes;
    private checkBridgeTypes;
    protected getRoutePath(from: PriceTokenAmount, to: PriceTokenAmount, route: Route): Promise<PathrStep[]>;
}
