import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * @internal
 * Thrown, when transaction is passed, but web3 cannot retrieve transaction receipt.
 */
export declare class FailedToCheckForTransactionReceiptError extends PathrSdkError {
    constructor();
}
