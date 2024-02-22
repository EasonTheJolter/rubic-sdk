import { StargateBridgeToken } from 'src/features/cross-chain/calculation-manager/providers/stargate-provider/constants/stargate-bridge-token';
import { StargateCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/stargate-provider/constants/stargate-cross-chain-supported-blockchain';
type StargatePoolMapping = Record<StargateCrossChainSupportedBlockchain, Partial<Record<StargateBridgeToken, Partial<Record<StargateCrossChainSupportedBlockchain, StargateBridgeToken[]>>>>>;
export declare const stargatePoolMapping: StargatePoolMapping;
export {};
