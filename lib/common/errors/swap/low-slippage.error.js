"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowSlippageError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when slippage tolerance is too low for selected token.
 */
class LowSlippageError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowSlippageError.prototype);
    }
}
exports.LowSlippageError = LowSlippageError;
//# sourceMappingURL=low-slippage.error.js.map