import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RequiredOnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainProxyFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-proxy-fee-info';
import { OnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/on-chain-trade';
import { LifiCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/lifi/models/lifi-calculation-options';
export declare class LifiProvider {
    private readonly lifi;
    private readonly onChainProxyService;
    private readonly defaultOptions;
    constructor();
    private isForbiddenBlockchain;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: LifiCalculationOptions): Promise<OnChainTrade>;
    /**
     * @description Lifi-aggregator provides several providers at the same time, this method chooses the most profitable trade
     * @param trades all available lifiTrades
     * @returns best trade
     */
    private getBestTrade;
    protected handleProxyContract(from: PriceTokenAmount<EvmBlockchainName>, fullOptions: RequiredOnChainCalculationOptions): Promise<{
        fromWithoutFee: PriceTokenAmount<EvmBlockchainName>;
        proxyFeeInfo: OnChainProxyFeeInfo | undefined;
    }>;
    private getGasFeeInfo;
    private getPath;
}
