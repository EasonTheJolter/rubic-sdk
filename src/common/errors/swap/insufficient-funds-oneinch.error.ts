import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';

/**
 * Thrown by 1inch, if user doesn't have enough balance.
 */
export class InsufficientFundsOneinchError extends PathrSdkError {
    constructor(public readonly blockchain: BlockchainName) {
        super();
        Object.setPrototypeOf(this, InsufficientFundsOneinchError.prototype);
    }
}
