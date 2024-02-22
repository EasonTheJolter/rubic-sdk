import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, if transaction signing in wallet expired.
 */
export class TronTransactionExpired extends PathrSdkError {
    constructor() {
        super('Signing timeout expired. Please, try again.');
        Object.setPrototypeOf(this, TronTransactionExpired.prototype);
    }
}
