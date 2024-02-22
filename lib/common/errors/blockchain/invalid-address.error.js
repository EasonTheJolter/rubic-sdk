"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidAddressError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when passed wallet address is invalid for {@link chainType}.
 */
class InvalidAddressError extends pathr_sdk_error_1.PathrSdkError {
    constructor(address) {
        super();
        this.address = address;
        Object.setPrototypeOf(this, InvalidAddressError.prototype);
    }
}
exports.InvalidAddressError = InvalidAddressError;
//# sourceMappingURL=invalid-address.error.js.map