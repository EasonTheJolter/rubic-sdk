"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnapprovedMethodError = void 0;
const errors_1 = require("src/common/errors");
/**
 * Thrown, when method is not whitelisted on proxy contract.
 */
class UnapprovedMethodError extends errors_1.PathrSdkError {
    constructor(method, contract) {
        super();
        this.method = method;
        this.contract = contract;
        Object.setPrototypeOf(this, UnapprovedMethodError.prototype);
    }
}
exports.UnapprovedMethodError = UnapprovedMethodError;
//# sourceMappingURL=unapproved-method-error.js.map