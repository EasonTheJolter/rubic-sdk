"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxGasPriceOverflowError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, when current gas price is higher, than max gas price on cross-chain contract
 * in target network.
 */
class MaxGasPriceOverflowError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, MaxGasPriceOverflowError.prototype);
    }
}
exports.MaxGasPriceOverflowError = MaxGasPriceOverflowError;
//# sourceMappingURL=max-gas-price-overflow.error.js.map