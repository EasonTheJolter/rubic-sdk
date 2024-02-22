"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveTradeProviders = void 0;
const curve_arbitrum_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/arbitrum/curve-arbitrum/curve-arbitrum-provider");
const curve_avalanche_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/avalanche/curve-avalanche/curve-avalanche-provider");
const curve_celo_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/celo/curve-celo/curve-celo-provider");
const curve_ethereum_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/ethereum/curve-ethereum/curve-ethereum-provider");
const curve_fantom_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/fantom/curve-fantom/curve-fantom-provider");
const curve_gnosis_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/gnosis/curve-gnosis/curve-gnosis-provider");
const curve_kava_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/kava/curve-kava/curve-kava-provider");
const curve_moonbeam_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/moonbeam/curve-moonbeam/curve-moonbeam-provider");
const curve_optimism_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/optimism/curve-optimism/curve-optimism-provider");
const curve_polygon_provider_1 = require("src/features/on-chain/calculation-manager/providers/dexes/polygon/curve-polygon/curve-polygon-provider");
const curve_ethereum_provider_2 = require("src/features/on-chain/calculation-manager/providers/dexes/pulsechain/curve-pulsechain/curve-ethereum-provider");
exports.CurveTradeProviders = [
    curve_arbitrum_provider_1.CurveArbitrumProvider,
    curve_avalanche_provider_1.CurveAvalancheProvider,
    curve_celo_provider_1.CurveCeloProvider,
    curve_ethereum_provider_1.CurveEthereumProvider,
    curve_fantom_provider_1.CurveFantomProvider,
    curve_kava_provider_1.CurveKavaProvider,
    curve_gnosis_provider_1.CurveGnosisProvider,
    curve_moonbeam_provider_1.CurveMoonbeamProvider,
    curve_optimism_provider_1.CurveOptimismProvider,
    curve_polygon_provider_1.CurvePolygonProvider,
    curve_ethereum_provider_2.CurvePulsechainProvider
];
//# sourceMappingURL=curve-trade-providers.js.map