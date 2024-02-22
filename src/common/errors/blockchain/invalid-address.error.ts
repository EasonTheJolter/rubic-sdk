import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when passed wallet address is invalid for {@link chainType}.
 */
export class InvalidAddressError extends PathrSdkError {
    constructor(public readonly address: string) {
        super();
        Object.setPrototypeOf(this, InvalidAddressError.prototype);
    }
}
