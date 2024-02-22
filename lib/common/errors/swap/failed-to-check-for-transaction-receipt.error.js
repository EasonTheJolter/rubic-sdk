"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedToCheckForTransactionReceiptError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * @internal
 * Thrown, when transaction is passed, but web3 cannot retrieve transaction receipt.
 */
class FailedToCheckForTransactionReceiptError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, FailedToCheckForTransactionReceiptError.prototype);
    }
}
exports.FailedToCheckForTransactionReceiptError = FailedToCheckForTransactionReceiptError;
//# sourceMappingURL=failed-to-check-for-transaction-receipt.error.js.map