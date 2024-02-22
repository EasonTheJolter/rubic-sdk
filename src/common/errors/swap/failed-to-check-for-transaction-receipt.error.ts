import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * @internal
 * Thrown, when transaction is passed, but web3 cannot retrieve transaction receipt.
 */
export class FailedToCheckForTransactionReceiptError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, FailedToCheckForTransactionReceiptError.prototype);
    }
}
