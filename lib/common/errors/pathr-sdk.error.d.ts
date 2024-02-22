/**
 * Base class for all errors that can be thrown in sdk.
 */
export declare class PathrSdkError extends Error {
    constructor(message?: string, errorPotions?: ErrorOptions);
}
