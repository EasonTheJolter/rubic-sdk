import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when method, which requires connected wallet, is called without
 * wallet being connected.
 */
export class WalletNotConnectedError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, WalletNotConnectedError.prototype);
    }
}
