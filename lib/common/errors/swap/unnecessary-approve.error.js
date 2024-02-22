"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnnecessaryApproveError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when approve method is called, but there is enough allowance.
 */
class UnnecessaryApproveError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, UnnecessaryApproveError.prototype);
    }
}
exports.UnnecessaryApproveError = UnnecessaryApproveError;
//# sourceMappingURL=unnecessary-approve.error.js.map