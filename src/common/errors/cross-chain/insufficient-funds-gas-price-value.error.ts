import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when user doesn't have enough native token balance for gas fee plus `value`.
 */
export class InsufficientFundsGasPriceValueError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, InsufficientFundsGasPriceValueError.prototype);
    }
}
