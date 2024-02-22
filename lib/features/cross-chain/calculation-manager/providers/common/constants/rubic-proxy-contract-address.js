"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathrProxyContractAddress = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
exports.pathrProxyContractAddress = Object.values(blockchain_name_1.BLOCKCHAIN_NAME).reduce((acc, blockchain) => {
    // ERC20Proxy
    let gateway = '0x3335733c454805df6a77f825f266e136FB4a3333';
    // PathrMultiProxy
    let router = '0x6AA981bFF95eDfea36Bdae98C26B274FfcafE8d3';
    // if (blockchain === BLOCKCHAIN_NAME.POLYGON) {
    //     router = '0x8669dAc053b96008bca08Da593d434ed817481eA'; // PathrMultiProxy
    //     gateway = '0x0248757451A929Fd62D6F4e88b1483379F226adC'; // ERC20Proxy
    // }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.POLYGON) {
        router = '0x64DfcaFd18e410cA03072e92F088df917359B0C1'; // PathrMultiProxy
        gateway = '0x4f9CEbc41d056F3f4A4bDa36F3A1a61a96984b31'; // ERC20Proxy
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN) {
        router = '0x9C57699576725ce531C4878DBe0E053B2f4A3619'; // PathrMultiProxy
        gateway = '0x7df26f8AD4195Da3fFa7e4d888C4a13b2e4708ce'; // ERC20Proxy
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.TELOS) {
        router = '0xA2d8CF32C16f070702c45a5686Fdb0a1d7171AAD';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.ZK_SYNC) {
        router = '0xa63c029612ddaD00A269383Ab016D1e7c14E851D';
        gateway = '0x8E70e517057e7380587Ea6990dAe81cB1Ba405ce';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.LINEA ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BASE ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.MANTLE ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.SCROLL ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.MANTA_PACIFIC) {
        router = '0xAf14797CcF963B1e3d028a9d51853acE16aedBA1';
    }
    return { ...acc, [blockchain]: { gateway, router } };
}, {});
//# sourceMappingURL=rubic-proxy-contract-address.js.map