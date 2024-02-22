import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, via provider is not whitelisted in .
 */
export class NotWhitelistedProviderError extends PathrSdkError {
    constructor(
        public readonly providerRouter: string,
        public readonly providerGateway?: string,
        public readonly cause?: string
    ) {
        super();
        Object.setPrototypeOf(this, NotWhitelistedProviderError.prototype);
    }
}
