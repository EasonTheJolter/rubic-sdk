import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when gas price is too low.
 */
export class LowGasError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowGasError.prototype);
    }
}
