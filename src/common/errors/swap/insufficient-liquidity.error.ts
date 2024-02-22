import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when tokens' pair doesn't have enough liquidity.
 */
export class InsufficientLiquidityError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, InsufficientLiquidityError.prototype);
    }
}
