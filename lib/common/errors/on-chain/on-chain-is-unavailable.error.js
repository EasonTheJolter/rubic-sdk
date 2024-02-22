"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChainIsUnavailableError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when on-chain contracts are on pause.
 */
class OnChainIsUnavailableError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, OnChainIsUnavailableError.prototype);
    }
}
exports.OnChainIsUnavailableError = OnChainIsUnavailableError;
//# sourceMappingURL=on-chain-is-unavailable.error.js.map