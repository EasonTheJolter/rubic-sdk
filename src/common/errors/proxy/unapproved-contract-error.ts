import { PathrSdkError } from 'src/common/errors';

/**
 * Thrown, when contract is not whitelisted on proxy contract.
 */
export class UnapprovedContractError extends PathrSdkError {
    constructor(public readonly method: string, public readonly contract: string) {
        super();
        Object.setPrototypeOf(this, UnapprovedContractError.prototype);
    }
}
