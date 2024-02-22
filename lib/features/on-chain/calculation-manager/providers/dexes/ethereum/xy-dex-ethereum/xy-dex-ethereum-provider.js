"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XyDexEthereumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const xy_dex_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/xy-dex-abstract/xy-dex-abstract-provider");
class XyDexEthereumProvider extends xy_dex_abstract_provider_1.XyDexAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM;
    }
}
exports.XyDexEthereumProvider = XyDexEthereumProvider;
//# sourceMappingURL=xy-dex-ethereum-provider.js.map