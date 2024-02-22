import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Web3PublicSupportedBlockchain } from 'src/core/blockchain/web3-public-service/models/web3-public-storage';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { ChangenowCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/changenow-provider/constants/changenow-api-blockchain';
import { ChangenowProxySupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/changenow-provider/constants/changenow-proxy-supported-blockchains';
import { CrossChainProvider } from 'src/features/cross-chain/calculation-manager/providers/common/cross-chain-provider';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
export declare class ChangenowCrossChainProvider extends CrossChainProvider {
    readonly type: "changenow";
    isSupportedBlockchain(blockchain: BlockchainName): blockchain is ChangenowCrossChainSupportedBlockchain;
    isSupportedProxyBlockchain(blockchain: BlockchainName): blockchain is ChangenowProxySupportedBlockchain;
    calculate(from: PriceTokenAmount, toToken: PriceToken, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    private getChangenowCurrencies;
    private checkMinMaxAmounts;
    private isNativeAddress;
    private getToAmount;
    private getMinMaxRange;
    protected getFeeInfo(fromBlockchain: Web3PublicSupportedBlockchain, providerAddress: string, percentFeeToken: PriceTokenAmount, useProxy: boolean): Promise<FeeInfo>;
    private getOnChainTrade;
    private getCurrency;
    private getTransitCurrency;
    protected getRoutePath(from: PriceTokenAmount, to: PriceTokenAmount): Promise<PathrStep[]>;
}
