"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
class TimeoutError extends pathr_sdk_error_1.PathrSdkError {
    constructor(message) {
        super(message);
        this.name = 'TimeoutError';
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=timeout.error.js.map