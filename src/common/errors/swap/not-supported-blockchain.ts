import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * @internal
 * Thrown, when provider does not support provided blockchain.
 */
export class NotSupportedBlockchain extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, NotSupportedBlockchain.prototype);
    }
}
