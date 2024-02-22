"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongReceiverAddressError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when passed wrong receiver address.
 */
class WrongReceiverAddressError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WrongReceiverAddressError.prototype);
    }
}
exports.WrongReceiverAddressError = WrongReceiverAddressError;
//# sourceMappingURL=wrong-receiver-address.error.js.map