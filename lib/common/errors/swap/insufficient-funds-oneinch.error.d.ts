import { PathrSdkError } from "../pathr-sdk.error";
import { BlockchainName } from "../../../core/blockchain/models/blockchain-name";
/**
 * Thrown by 1inch, if user doesn't have enough balance.
 */
export declare class InsufficientFundsOneinchError extends PathrSdkError {
    readonly blockchain: BlockchainName;
    constructor(blockchain: BlockchainName);
}
