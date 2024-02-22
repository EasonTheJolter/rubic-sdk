"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneinchArbitrumProvider = void 0;
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const oneinch_arbitrum_protocols_1 = require("src/features/on-chain/calculation-manager/providers/dexes/arbitrum/oneinch-arbitrum/oneinch-arbitrum-protocols");
const oneinch_abstract_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/oneinch-abstract-provider");
class OneinchArbitrumProvider extends oneinch_abstract_provider_1.OneinchAbstractProvider {
    constructor() {
        super(...arguments);
        this.blockchain = blockchain_name_1.BLOCKCHAIN_NAME.ARBITRUM;
    }
    getAvailableProtocols() {
        return oneinch_arbitrum_protocols_1.oneinchArbitrumProtocols.join(',');
    }
}
exports.OneinchArbitrumProvider = OneinchArbitrumProvider;
//# sourceMappingURL=oneinch-arbitrum-provider.js.map