"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRejectError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when user cancels transaction.
 */
class UserRejectError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, UserRejectError.prototype);
    }
}
exports.UserRejectError = UserRejectError;
//# sourceMappingURL=user-reject.error.js.map