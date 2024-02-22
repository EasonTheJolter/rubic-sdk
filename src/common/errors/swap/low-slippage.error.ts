import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when slippage tolerance is too low for selected token.
 */
export class LowSlippageError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowSlippageError.prototype);
    }
}
