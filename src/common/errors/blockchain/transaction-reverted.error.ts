import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, if transaction was reverted without specified error.
 */
export class TransactionRevertedError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, TransactionRevertedError.prototype);
    }
}
