import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when provider does not support provided tokens.
 */
export declare class NotSupportedTokensError extends PathrSdkError {
    constructor();
}
