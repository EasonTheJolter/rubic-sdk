import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, when amount of tokens don't cover provider's fee
 */
export declare class TooLowAmountError extends PathrSdkError {
    constructor();
}
