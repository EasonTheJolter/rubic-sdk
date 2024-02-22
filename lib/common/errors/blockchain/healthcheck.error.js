"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * @internal
 * Thrown, if rpc provider has not passed healthcheck.
 */
class HealthcheckError extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, HealthcheckError.prototype);
    }
}
exports.HealthcheckError = HealthcheckError;
//# sourceMappingURL=healthcheck.error.js.map