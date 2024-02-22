import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CbridgeCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/cbridge/constants/cbridge-supported-blockchains';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { ScrollBridgeSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/scroll-bridge/models/scroll-bridge-supported-blockchain';
export declare class ScrollBridgeProvider extends CrossChainProvider {
    readonly type: "scroll_bridge";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is ScrollBridgeSupportedBlockchain;
    calculate(fromToken: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getFeeInfo(_fromBlockchain: CbridgeCrossChainSupportedBlockchain, _providerAddress: string, _percentFeeToken: PriceTokenAmount, _useProxy: boolean): Promise<FeeInfo>;
    protected getRoutePath(fromToken: PriceTokenAmount, toToken: PriceTokenAmount): Promise<PathrStep[]>;
}
