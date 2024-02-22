"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowToSlippageError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when toSlippage tolerance is too low to calculate Celer trade.
 */
class LowToSlippageError extends pathr_sdk_error_1.PathrSdkError {
}
exports.LowToSlippageError = LowToSlippageError;
//# sourceMappingURL=low-to-slippage.error.js.map