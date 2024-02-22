"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinAmountError = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
class MinAmountError extends pathr_sdk_error_1.PathrSdkError {
    constructor(minAmount, tokenSymbol) {
        super(`Min amount is ${new bignumber_js_1.default(minAmount).toFixed()} ${tokenSymbol}`);
        this.minAmount = minAmount;
        this.tokenSymbol = tokenSymbol;
        Object.setPrototypeOf(this, MinAmountError.prototype);
    }
}
exports.MinAmountError = MinAmountError;
//# sourceMappingURL=min-amount.error.js.map