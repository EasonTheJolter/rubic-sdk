import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';

/**
 * Thrown during swap, if user's selected network does not match source blockchain
 * in swap parameters.
 */
export class WrongNetworkError extends PathrSdkError {
    constructor(public readonly requiredBlockchain: BlockchainName) {
        super();
        Object.setPrototypeOf(this, WrongNetworkError.prototype);
    }
}
