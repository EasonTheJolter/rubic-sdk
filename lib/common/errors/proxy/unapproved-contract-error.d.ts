import { PathrSdkError } from 'src/common/errors';
/**
 * Thrown, when contract is not whitelisted on proxy contract.
 */
export declare class UnapprovedContractError extends PathrSdkError {
    readonly method: string;
    readonly contract: string;
    constructor(method: string, contract: string);
}
