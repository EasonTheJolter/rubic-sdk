"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsufficientLiquidityError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown, when tokens' pair doesn't have enough liquidity.
 */
class InsufficientLiquidityError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, InsufficientLiquidityError.prototype);
    }
}
exports.InsufficientLiquidityError = InsufficientLiquidityError;
//# sourceMappingURL=insufficient-liquidity.error.js.map