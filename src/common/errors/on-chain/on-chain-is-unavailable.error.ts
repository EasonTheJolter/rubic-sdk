import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when on-chain contracts are on pause.
 */
export class OnChainIsUnavailableError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, OnChainIsUnavailableError.prototype);
    }
}
