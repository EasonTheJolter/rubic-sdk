"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongNetworkError = void 0;
const pathr_sdk_error_1 = require("../pathr-sdk.error");
/**
 * Thrown during swap, if user's selected network does not match source blockchain
 * in swap parameters.
 */
class WrongNetworkError extends pathr_sdk_error_1.PathrSdkError {
    constructor(requiredBlockchain) {
        super();
        this.requiredBlockchain = requiredBlockchain;
        Object.setPrototypeOf(this, WrongNetworkError.prototype);
    }
}
exports.WrongNetworkError = WrongNetworkError;
//# sourceMappingURL=wrong-network.error.js.map