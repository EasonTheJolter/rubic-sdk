"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUICK_SWAP_V3_PROVIDER_CONFIGURATION = void 0;
const tokens_1 = require("src/common/tokens");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
exports.QUICK_SWAP_V3_PROVIDER_CONFIGURATION = {
    wethAddress: tokens_1.wrappedNativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.POLYGON].address,
    maxTransitTokens: 1
};
//# sourceMappingURL=provider-configuration.js.map