"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowGasError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when gas price is too low.
 */
class LowGasError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, LowGasError.prototype);
    }
}
exports.LowGasError = LowGasError;
//# sourceMappingURL=low-gas.error.js.map