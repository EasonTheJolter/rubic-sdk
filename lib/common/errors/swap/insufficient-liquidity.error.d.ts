import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, when tokens' pair doesn't have enough liquidity.
 */
export declare class InsufficientLiquidityError extends PathrSdkError {
    constructor();
}
