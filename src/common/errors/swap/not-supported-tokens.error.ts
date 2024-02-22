import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when provider does not support provided tokens.
 */
export class NotSupportedTokensError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, NotSupportedTokensError.prototype);
    }
}
