import { PathrSdkError } from "..";
/**
 * Thrown, when method is not whitelisted on proxy contract.
 */
export declare class UnapprovedMethodError extends PathrSdkError {
    readonly method: string;
    readonly contract: string;
    constructor(method: string, contract: string);
}
