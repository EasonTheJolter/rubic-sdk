import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when `swap` transaction in lifi is failed.
 */
export class LifiPairIsUnavailableError extends PathrSdkError {
    constructor() {
        super('The swap using this pair is currently unavailable. Please try again later.');
        Object.setPrototypeOf(this, LifiPairIsUnavailableError.prototype);
    }
}
