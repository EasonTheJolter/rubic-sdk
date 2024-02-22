import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when passed wrong receiver address.
 */
export class WrongReceiverAddressError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WrongReceiverAddressError.prototype);
    }
}
