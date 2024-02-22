"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidrouterContractAddress = void 0;
const pathr_proxy_contract_address_1 = require("../../common/constants/pathr-proxy-contract-address");
const squidrouter_cross_chain_supported_blockchain_1 = require("./squidrouter-cross-chain-supported-blockchain");
exports.SquidrouterContractAddress = squidrouter_cross_chain_supported_blockchain_1.squidrouterCrossChainSupportedBlockchains.reduce((acc, blockchain) => {
    return {
        ...acc,
        [blockchain]: {
            providerRouter: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
            providerGateway: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
            pathrRouter: pathr_proxy_contract_address_1.pathrProxyContractAddress[blockchain].gateway
        }
    };
}, {});
//# sourceMappingURL=squidrouter-contract-address.js.map