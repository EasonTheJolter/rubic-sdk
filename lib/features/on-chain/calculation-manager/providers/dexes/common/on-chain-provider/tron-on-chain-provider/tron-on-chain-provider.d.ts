import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { TronBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { TronWeb3Public } from 'src/core/blockchain/web3-public-service/web3-public/tron-web3-public/tron-web3-public';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { TronOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/tron-on-chain-trade/tron-on-chain-trade';
import { OnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/on-chain-provider';
export declare abstract class TronOnChainProvider extends OnChainProvider {
    readonly blockchain: "TRON";
    protected get walletAddress(): string;
    protected get web3Public(): TronWeb3Public;
    abstract calculate(from: PriceTokenAmount<TronBlockchainName>, to: PriceToken<TronBlockchainName>, options?: OnChainCalculationOptions): Promise<TronOnChainTrade>;
}
