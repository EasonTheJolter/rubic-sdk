"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZrxEthereumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const zrx_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/zrx-abstract/zrx-abstract-provider");
class ZrxEthereumProvider extends zrx_abstract_provider_1.ZrxAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM;
    }
}
exports.ZrxEthereumProvider = ZrxEthereumProvider;
//# sourceMappingURL=zrx-ethereum-provider.js.map