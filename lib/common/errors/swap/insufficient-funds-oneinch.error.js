"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsufficientFundsOneinchError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown by 1inch, if user doesn't have enough balance.
 */
class InsufficientFundsOneinchError extends pathr_sdk_error_1.PathrSdkError {
    constructor(blockchain) {
        super();
        this.blockchain = blockchain;
        Object.setPrototypeOf(this, InsufficientFundsOneinchError.prototype);
    }
}
exports.InsufficientFundsOneinchError = InsufficientFundsOneinchError;
//# sourceMappingURL=insufficient-funds-oneinch.error.js.map