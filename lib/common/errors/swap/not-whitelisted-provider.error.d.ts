import { PathrSdkError } from "../pathr-sdk.error";
/**
 * Thrown, via provider is not whitelisted in .
 */
export declare class NotWhitelistedProviderError extends PathrSdkError {
    readonly providerRouter: string;
    readonly providerGateway?: string | undefined;
    readonly cause?: string | undefined;
    constructor(providerRouter: string, providerGateway?: string | undefined, cause?: string | undefined);
}
