"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgersPairIsUnavailableError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when `quote` request in bridgers is failed.
 */
class BridgersPairIsUnavailableError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super('The swap using this pair is currently unavailable. Please try again later.');
        Object.setPrototypeOf(this, BridgersPairIsUnavailableError.prototype);
    }
}
exports.BridgersPairIsUnavailableError = BridgersPairIsUnavailableError;
//# sourceMappingURL=bridgers-pair-is-unavailable.error.js.map