import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
export declare function oneInchHttpGetRequest<T>(path: string, blockchain: BlockchainName, options?: {}): Promise<T>;
export declare function oneInchHttpGetApproveRequest<T>(path: string, blockchain: BlockchainName, options?: {}): Promise<T>;
