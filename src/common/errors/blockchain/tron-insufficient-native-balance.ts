import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, if transaction was reverted because of insufficient native balance.
 */
export class TronInsufficientNativeBalance extends PathrSdkError {
    constructor() {
        super(
            'Insufficient funds of native token. Decrease swap amount or increase native tokens balance.'
        );
        Object.setPrototypeOf(this, TronInsufficientNativeBalance.prototype);
    }
}
