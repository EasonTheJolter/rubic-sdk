import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when `swap` request to API is failed.
 */
export class SwapRequestError extends PathrSdkError {
    constructor() {
        super(
            "Unfortunately, the provider couldn't generate the transaction. Please try again later."
        );
        Object.setPrototypeOf(this, SwapRequestError.prototype);
    }
}
