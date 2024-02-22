"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathrSdkError = void 0;
/**
 * Base class for all errors that can be thrown in sdk.
 */
class PathrSdkError extends Error {
    constructor(message, errorPotions) {
        super(message, errorPotions);
        Object.setPrototypeOf(this, PathrSdkError.prototype);
    }
}
exports.PathrSdkError = PathrSdkError;
//# sourceMappingURL=rubic-sdk.error.js.map