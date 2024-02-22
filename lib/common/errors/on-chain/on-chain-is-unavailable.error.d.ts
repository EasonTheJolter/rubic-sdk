import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when on-chain contracts are on pause.
 */
export declare class OnChainIsUnavailableError extends PathrSdkError {
    constructor();
}
