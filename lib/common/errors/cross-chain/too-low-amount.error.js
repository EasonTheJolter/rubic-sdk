"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooLowAmountError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when amount of tokens don't cover provider's fee
 */
class TooLowAmountError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super("The swap can't be executed with the entered amount of tokens. Please change it to the greater amount.");
        Object.setPrototypeOf(this, TooLowAmountError.prototype);
    }
}
exports.TooLowAmountError = TooLowAmountError;
//# sourceMappingURL=too-low-amount.error.js.map