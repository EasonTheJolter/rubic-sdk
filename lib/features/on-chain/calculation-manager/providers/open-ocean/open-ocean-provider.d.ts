import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainTradeError } from 'src/features/on-chain/calculation-manager/models/on-chain-trade-error';
import { RequiredOnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainProxyFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-proxy-fee-info';
import { OnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/on-chain-trade';
export declare class OpenOceanProvider {
    private readonly onChainProxyService;
    static readonly nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    constructor();
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options: RequiredOnChainCalculationOptions): Promise<OnChainTrade | OnChainTradeError>;
    protected handleProxyContract(from: PriceTokenAmount<EvmBlockchainName>, fullOptions: RequiredOnChainCalculationOptions): Promise<{
        fromWithoutFee: PriceTokenAmount<EvmBlockchainName>;
        proxyFeeInfo: OnChainProxyFeeInfo | undefined;
    }>;
    private getGasFeeInfo;
    private checkIsSupportedBlockchain;
    private checkIsSupportedTokens;
}
