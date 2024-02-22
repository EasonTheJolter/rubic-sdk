import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when approve method is called, but there is enough allowance.
 */
export class UnnecessaryApproveError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, UnnecessaryApproveError.prototype);
    }
}
