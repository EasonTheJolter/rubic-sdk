import { PathrSdkError } from 'src/common/errors';

/**
 * Thrown, when method is not whitelisted on proxy contract.
 */
export class UnapprovedMethodError extends PathrSdkError {
    constructor(public readonly method: string, public readonly contract: string) {
        super();
        Object.setPrototypeOf(this, UnapprovedMethodError.prototype);
    }
}
