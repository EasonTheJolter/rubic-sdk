import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { Token } from 'src/common/tokens';

/**
 * Thrown, if token has deflation.
 */
export class DeflationTokenError extends PathrSdkError {
    constructor(public readonly token: Token, public readonly deflationPercent: BigNumber) {
        super(`Token ${token.address} has ${deflationPercent.dp(2).toFixed()}% deflation`);
        Object.setPrototypeOf(this, DeflationTokenError.prototype);
    }
}
