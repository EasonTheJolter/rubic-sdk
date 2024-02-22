import { PathrSdkError } from 'src/common/errors';
import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Web3Public } from 'src/core/blockchain/web3-public-service/web3-public/web3-public';
import { HttpClient } from 'src/core/http-client/models/http-client';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { OnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/on-chain-trade';
/**
 * Abstract class for all on-chain trade providers.
 */
export declare abstract class OnChainProvider {
    static parseError(err: unknown): PathrSdkError;
    /**
     * Provider blockchain.
     */
    abstract readonly blockchain: BlockchainName;
    readonly supportReceiverAddress: boolean;
    /**
     * Type of provider.
     */
    abstract get type(): OnChainTradeType;
    protected abstract get walletAddress(): string;
    protected get web3Public(): Web3Public;
    protected get httpClient(): HttpClient;
    /**
     * Calculates on-chain trade.
     * @param from Token to sell with input amount.
     * @param to Token to get.
     * @param options Additional options.
     */
    abstract calculate(from: PriceTokenAmount, to: PriceToken, options?: OnChainCalculationOptions): Promise<OnChainTrade>;
}
