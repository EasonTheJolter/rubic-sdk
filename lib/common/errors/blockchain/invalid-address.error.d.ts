import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when passed wallet address is invalid for {@link chainType}.
 */
export declare class InvalidAddressError extends PathrSdkError {
    readonly address: string;
    constructor(address: string);
}
