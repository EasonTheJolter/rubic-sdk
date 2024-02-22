"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRequestError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when `swap` request to API is failed.
 */
class SwapRequestError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super("Unfortunately, the provider couldn't generate the transaction. Please try again later.");
        Object.setPrototypeOf(this, SwapRequestError.prototype);
    }
}
exports.SwapRequestError = SwapRequestError;
//# sourceMappingURL=swap-request.error.js.map