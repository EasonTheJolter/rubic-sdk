import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, if transaction was reverted because of insufficient native balance.
 */
export declare class TronInsufficientNativeBalance extends PathrSdkError {
    constructor();
}
