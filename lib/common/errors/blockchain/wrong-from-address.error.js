"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongFromAddressError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when passed wrong from address in `encode` function.
 */
class WrongFromAddressError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WrongFromAddressError.prototype);
    }
}
exports.WrongFromAddressError = WrongFromAddressError;
//# sourceMappingURL=wrong-from-address.error.js.map