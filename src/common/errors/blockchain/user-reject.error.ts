import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when user cancels transaction.
 */
export class UserRejectError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, UserRejectError.prototype);
    }
}
