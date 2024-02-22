"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainIsUnavailableError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when cross-chain contracts are on pause or there is not enough crypto balance.
 */
class CrossChainIsUnavailableError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, CrossChainIsUnavailableError.prototype);
    }
}
exports.CrossChainIsUnavailableError = CrossChainIsUnavailableError;
//# sourceMappingURL=cross-chain-is-unavailable.error.js.map