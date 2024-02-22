"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneinchEthereumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const oneinch_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/oneinch-abstract-provider");
class OneinchEthereumProvider extends oneinch_abstract_provider_1.OneinchAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM;
    }
}
exports.OneinchEthereumProvider = OneinchEthereumProvider;
//# sourceMappingURL=oneinch-ethereum-provider.js.map