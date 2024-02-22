import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when approve method is called, but there is enough allowance.
 */
export declare class UnnecessaryApproveError extends PathrSdkError {
    constructor();
}
