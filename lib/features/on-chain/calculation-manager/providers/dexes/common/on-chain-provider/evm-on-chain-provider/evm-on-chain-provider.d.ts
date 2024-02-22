import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { EvmWeb3Public } from 'src/core/blockchain/web3-public-service/web3-public/evm-web3-public/evm-web3-public';
import { OnChainCalculationOptions, RequiredOnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainProxyFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-proxy-fee-info';
import { OnChainProxyService } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-proxy-service/on-chain-proxy-service';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { GasPriceInfo } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/models/gas-price-info';
import { OnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/on-chain-provider';
export declare abstract class EvmOnChainProvider extends OnChainProvider {
    abstract readonly blockchain: EvmBlockchainName;
    protected readonly onChainProxyService: OnChainProxyService;
    protected get walletAddress(): string;
    protected get web3Public(): EvmWeb3Public;
    abstract calculate(from: PriceTokenAmount<EvmBlockchainName>, to: PriceToken<EvmBlockchainName>, options?: OnChainCalculationOptions): Promise<EvmOnChainTrade>;
    protected handleProxyContract(from: PriceTokenAmount<EvmBlockchainName>, fullOptions: RequiredOnChainCalculationOptions): Promise<{
        fromWithoutFee: PriceTokenAmount<EvmBlockchainName>;
        proxyFeeInfo: OnChainProxyFeeInfo | undefined;
    }>;
    protected getGasPriceInfo(): Promise<GasPriceInfo>;
}
