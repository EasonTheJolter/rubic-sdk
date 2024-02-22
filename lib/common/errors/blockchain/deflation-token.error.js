"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeflationTokenError = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * Thrown, if token has deflation.
 */
class DeflationTokenError extends pathr_sdk_error_1.PathrSdkError {
    constructor(token, deflationPercent) {
        super(`Token ${token.address} has ${deflationPercent.dp(2).toFixed()}% deflation`);
        this.token = token;
        this.deflationPercent = deflationPercent;
        Object.setPrototypeOf(this, DeflationTokenError.prototype);
    }
}
exports.DeflationTokenError = DeflationTokenError;
//# sourceMappingURL=deflation-token.error.js.map