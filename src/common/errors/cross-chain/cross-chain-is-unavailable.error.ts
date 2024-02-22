import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when cross-chain contracts are on pause or there is not enough crypto balance.
 */
export class CrossChainIsUnavailableError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, CrossChainIsUnavailableError.prototype);
    }
}
