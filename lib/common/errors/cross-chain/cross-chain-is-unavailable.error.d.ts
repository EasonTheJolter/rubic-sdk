import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, when cross-chain contracts are on pause or there is not enough crypto balance.
 */
export declare class CrossChainIsUnavailableError extends PathrSdkError {
    constructor();
}
