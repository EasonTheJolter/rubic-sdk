"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneinchBaseProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const oneinch_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/oneinch-abstract-provider");
class OneinchBaseProvider extends oneinch_abstract_provider_1.OneinchAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.BASE;
    }
}
exports.OneinchBaseProvider = OneinchBaseProvider;
//# sourceMappingURL=oneinch-base-provider.js.map