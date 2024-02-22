import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, if transaction was reverted without specified error.
 */
export declare class TransactionRevertedError extends PathrSdkError {
    constructor();
}
