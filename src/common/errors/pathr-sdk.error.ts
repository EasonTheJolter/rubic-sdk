/**
 * Base class for all errors that can be thrown in sdk.
 */
export class PathrSdkError extends Error {
    constructor(message?: string, errorPotions?: ErrorOptions) {
        super(message, errorPotions);
        Object.setPrototypeOf(this, PathrSdkError.prototype);
    }
}
