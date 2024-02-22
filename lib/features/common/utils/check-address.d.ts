import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { CrossChainTradeType } from 'src/features/cross-chain/calculation-manager/models/cross-chain-trade-type';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
export declare function isAddressCorrect(address: string, toBlockchain: BlockchainName, crossChainType?: CrossChainTradeType | OnChainTradeType): Promise<boolean>;
