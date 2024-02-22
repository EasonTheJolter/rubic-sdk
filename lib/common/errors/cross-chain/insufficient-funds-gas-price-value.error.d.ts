import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, when user doesn't have enough native token balance for gas fee plus `value`.
 */
export declare class InsufficientFundsGasPriceValueError extends PathrSdkError {
    constructor();
}
