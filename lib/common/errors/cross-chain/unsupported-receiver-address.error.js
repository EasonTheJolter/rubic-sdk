"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedReceiverAddressError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
class UnsupportedReceiverAddressError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super('This provider doesn’t support the receiver address');
        Object.setPrototypeOf(this, UnsupportedReceiverAddressError.prototype);
    }
}
exports.UnsupportedReceiverAddressError = UnsupportedReceiverAddressError;
//# sourceMappingURL=unsupported-receiver-address.error.js.map