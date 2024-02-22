import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CbridgeCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/cbridge/constants/cbridge-supported-blockchains';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
export declare class CbridgeCrossChainProvider extends CrossChainProvider {
    readonly type: "celer_bridge";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is CbridgeCrossChainSupportedBlockchain;
    calculate(fromToken: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private fetchContractAddressAndCheckTokens;
    private getEstimates;
    private getOnChainTrade;
    private getMinMaxAmountsErrors;
    protected getFeeInfo(fromBlockchain: CbridgeCrossChainSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    protected getRoutePath(from: PriceTokenAmount, transit: PriceTokenAmount, to: PriceTokenAmount, onChainTrade: EvmOnChainTrade | null): Promise<PathrStep[]>;
}
