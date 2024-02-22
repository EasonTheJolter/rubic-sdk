"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSupportedBlockchain = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
/**
 * @internal
 * Thrown, when provider does not support provided blockchain.
 */
class NotSupportedBlockchain extends pathr_sdk_error_1.PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, NotSupportedBlockchain.prototype);
    }
}
exports.NotSupportedBlockchain = NotSupportedBlockchain;
//# sourceMappingURL=not-supported-blockchain.js.map