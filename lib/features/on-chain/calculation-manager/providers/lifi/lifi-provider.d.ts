import { PriceToken, PriceTokenAmount } from '../../../../../common/tokens';
import { EvmBlockchainName } from '../../../../../core/blockchain/models/blockchain-name';
import { RequiredOnChainCalculationOptions } from '../common/models/on-chain-calculation-options';
import { OnChainProxyFeeInfo } from '../common/models/on-chain-proxy-fee-info';
import { OnChainTrade } from '../common/on-chain-trade/on-chain-trade';
import { LifiCalculationOptions } from './models/lifi-calculation-options';
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
