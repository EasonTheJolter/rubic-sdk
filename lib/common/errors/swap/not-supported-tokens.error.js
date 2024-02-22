"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSupportedTokensError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when provider does not support provided tokens.
 */
class NotSupportedTokensError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, NotSupportedTokensError.prototype);
    }
}
exports.NotSupportedTokensError = NotSupportedTokensError;
//# sourceMappingURL=not-supported-tokens.error.js.map