import { Token } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { DeflationManagerSupportedBlockchain } from 'src/features/deflation-token-manager/models/deflation-manager-supported-blockchain';
import { IsDeflationToken } from 'src/features/deflation-token-manager/models/is-deflation-token';
/**
 * Contains method to check token for deflation.
 */
export declare class DeflationTokenManager {
    static isSupportedBlockchain(blockchain: BlockchainName): blockchain is DeflationManagerSupportedBlockchain;
    checkToken(token: Token): Promise<void | never>;
    isDeflationToken(token: Token): Promise<IsDeflationToken>;
    private findUniswapV2Trade;
    private simulateTransferWithSwap;
    private parseError;
}
