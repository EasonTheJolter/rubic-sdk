import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when passed wrong from address in `encode` function.
 */
export class WrongFromAddressError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WrongFromAddressError.prototype);
    }
}
