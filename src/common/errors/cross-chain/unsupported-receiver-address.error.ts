import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

export class UnsupportedReceiverAddressError extends PathrSdkError {
    constructor() {
        super('This provider doesn’t support the receiver address');
        Object.setPrototypeOf(this, UnsupportedReceiverAddressError.prototype);
    }
}
