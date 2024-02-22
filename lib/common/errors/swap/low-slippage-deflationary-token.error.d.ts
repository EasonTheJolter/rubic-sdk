import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, when user is selling deflationary token with too low slippage.
 */
export declare class LowSlippageDeflationaryTokenError extends PathrSdkError {
    constructor();
}
