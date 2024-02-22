import { Web3PublicSupportedBlockchain } from 'src/core/blockchain/web3-public-service/models/web3-public-storage';
import { TxStatus } from 'src/core/blockchain/web3-public-service/web3-public/models/tx-status';
/**
 * Get cross-chain trade's source transaction status via receipt.
 * @returns Cross-chain transaction status.
 */
export declare function getSrcTxStatus(fromBlockchain: Web3PublicSupportedBlockchain, srcTxHash: string): Promise<TxStatus>;
