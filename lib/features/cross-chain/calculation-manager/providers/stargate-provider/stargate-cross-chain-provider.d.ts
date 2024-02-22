import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { StargateCrossChainSupportedBlockchain } from './constants/stargate-cross-chain-supported-blockchain';
export declare class StargateCrossChainProvider extends CrossChainProvider {
    readonly type: "stargate";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is StargateCrossChainSupportedBlockchain;
    private static hasDirectRoute;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private getLayerZeroFee;
    protected getFeeInfo(fromBlockchain: Partial<EvmBlockchainName>, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private fetchPoolFees;
    private getPoolToken;
    private getTransitToken;
    private getDstSwap;
    static getSymbol(symbol: string, blockchain: BlockchainName): string;
    protected getRoutePath(from: PriceTokenAmount, to: PriceTokenAmount, srcOnChainTrade: EvmOnChainTrade | null): Promise<PathrStep[]>;
}
