import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
/**
 * Thrown during swap, if user's selected network does not match source blockchain
 * in swap parameters.
 */
export declare class WrongNetworkError extends PathrSdkError {
    readonly requiredBlockchain: BlockchainName;
    constructor(requiredBlockchain: BlockchainName);
}
