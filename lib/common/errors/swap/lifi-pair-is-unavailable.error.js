"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifiPairIsUnavailableError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when `swap` transaction in lifi is failed.
 */
class LifiPairIsUnavailableError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super('The swap using this pair is currently unavailable. Please try again later.');
        Object.setPrototypeOf(this, LifiPairIsUnavailableError.prototype);
    }
}
exports.LifiPairIsUnavailableError = LifiPairIsUnavailableError;
//# sourceMappingURL=lifi-pair-is-unavailable.error.js.map