import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when `quote` request in bridgers is failed.
 */
export class BridgersPairIsUnavailableError extends PathrSdkError {
    constructor() {
        super('The swap using this pair is currently unavailable. Please try again later.');
        Object.setPrototypeOf(this, BridgersPairIsUnavailableError.prototype);
    }
}
