"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALGEBRA_INTEGRAL_PROVIDER_CONFIGURATION = void 0;
const tokens_1 = require("src/common/tokens");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
exports.ALGEBRA_INTEGRAL_PROVIDER_CONFIGURATION = {
    wethAddress: tokens_1.wrappedNativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.ARTHERA].address,
    maxTransitTokens: 1
};
//# sourceMappingURL=provider-configuration.js.map