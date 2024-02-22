"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletNotConnectedError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when method, which requires connected wallet, is called without
 * wallet being connected.
 */
class WalletNotConnectedError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WalletNotConnectedError.prototype);
    }
}
exports.WalletNotConnectedError = WalletNotConnectedError;
//# sourceMappingURL=wallet-not-connected.error.js.map