import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when gas price is too low.
 */
export declare class LowGasError extends PathrSdkError {
    constructor();
}
