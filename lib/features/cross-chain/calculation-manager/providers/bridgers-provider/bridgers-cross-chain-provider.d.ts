import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { BridgersCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/constants/bridgers-cross-chain-supported-blockchain';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { AbiItem } from 'web3-utils';
export declare class BridgersCrossChainProvider extends CrossChainProvider {
    readonly type: "bridgers";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is BridgersCrossChainSupportedBlockchain;
    areSupportedBlockchains(fromBlockchain: BlockchainName, toBlockchain: BlockchainName): boolean;
    calculate(from: PriceTokenAmount, toToken: PriceToken, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getFeeInfo(fromBlockchain: BridgersCrossChainSupportedBlockchain, _providerAddress: string, _percentFeeToken: PriceTokenAmount, _useProxy: boolean, _contractAbi: AbiItem[]): Promise<FeeInfo>;
    protected getRoutePath(fromToken: PriceTokenAmount, toToken: PriceTokenAmount): Promise<PathrStep[]>;
}
