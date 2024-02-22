"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowSlippageDeflationaryTokenError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when user is selling deflationary token with too low slippage.
 */
class LowSlippageDeflationaryTokenError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowSlippageDeflationaryTokenError.prototype);
    }
}
exports.LowSlippageDeflationaryTokenError = LowSlippageDeflationaryTokenError;
//# sourceMappingURL=low-slippage-deflationary-token.error.js.map