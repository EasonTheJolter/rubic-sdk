import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when user is selling deflationary token with too low slippage.
 */
export class LowSlippageDeflationaryTokenError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowSlippageDeflationaryTokenError.prototype);
    }
}
