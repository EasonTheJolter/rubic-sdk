"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRevertedError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, if transaction was reverted without specified error.
 */
class TransactionRevertedError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, TransactionRevertedError.prototype);
    }
}
exports.TransactionRevertedError = TransactionRevertedError;
//# sourceMappingURL=transaction-reverted.error.js.map