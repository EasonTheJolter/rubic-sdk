"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainProviders = void 0;
const arbitrum_rbc_bridge_provider_1 = require("src/features/cross-chain/calculation-manager/providers/arbitrum-rbc-bridge/arbitrum-rbc-bridge-provider");
const bridgers_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/bridgers-provider/bridgers-cross-chain-provider");
const cbridge_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/cbridge/cbridge-cross-chain-provider");
const changenow_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/changenow-provider/changenow-cross-chain-provider");
const debridge_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/debridge-provider/debridge-cross-chain-provider");
const lifi_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/lifi-provider/lifi-cross-chain-provider");
// import { ScrollBridgeProvider } from 'src/features/cross-chain/calculation-manager/providers/scroll-bridge/scroll-bridge-provider';
const squidrouter_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/squidrouter-provider/squidrouter-cross-chain-provider");
const symbiosis_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/symbiosis-provider/symbiosis-cross-chain-provider");
const xy_cross_chain_provider_1 = require("src/features/cross-chain/calculation-manager/providers/xy-provider/xy-cross-chain-provider");
const stargate_cross_chain_provider_1 = require("../providers/stargate-provider/stargate-cross-chain-provider");
const taiko_bridge_provider_1 = require("../providers/taiko-bridge/taiko-bridge-provider");
const proxyProviders = [
    symbiosis_cross_chain_provider_1.SymbiosisCrossChainProvider,
    stargate_cross_chain_provider_1.StargateCrossChainProvider,
    xy_cross_chain_provider_1.XyCrossChainProvider,
    cbridge_cross_chain_provider_1.CbridgeCrossChainProvider,
    lifi_cross_chain_provider_1.LifiCrossChainProvider,
    squidrouter_cross_chain_provider_1.SquidrouterCrossChainProvider
];
const nonProxyProviders = [
    debridge_cross_chain_provider_1.DebridgeCrossChainProvider,
    bridgers_cross_chain_provider_1.BridgersCrossChainProvider,
    changenow_cross_chain_provider_1.ChangenowCrossChainProvider,
    arbitrum_rbc_bridge_provider_1.ArbitrumRbcBridgeProvider,
    taiko_bridge_provider_1.TaikoBridgeProvider
    // ScrollBridgeProvider
];
exports.CrossChainProviders = [...proxyProviders, ...nonProxyProviders];
//# sourceMappingURL=cross-chain-providers.js.map