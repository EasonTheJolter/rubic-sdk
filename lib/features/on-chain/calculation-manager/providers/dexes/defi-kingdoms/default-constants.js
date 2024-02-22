"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDFKProviderConfiguration = void 0;
const tokens_1 = require("src/common/tokens");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const defaultDFKRoutingProvidersAddresses = [
    tokens_1.wrappedNativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.DFK].address // WJEWEL
];
const defaultDFKWethAddress = tokens_1.wrappedNativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.DFK].address;
exports.defaultDFKProviderConfiguration = {
    maxTransitTokens: 2,
    routingProvidersAddresses: defaultDFKRoutingProvidersAddresses,
    wethAddress: defaultDFKWethAddress
};
//# sourceMappingURL=default-constants.js.map