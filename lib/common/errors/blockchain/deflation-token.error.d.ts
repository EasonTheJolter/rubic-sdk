import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { Token } from 'src/common/tokens';
/**
 * Thrown, if token has deflation.
 */
export declare class DeflationTokenError extends PathrSdkError {
    readonly token: Token;
    readonly deflationPercent: BigNumber;
    constructor(token: Token, deflationPercent: BigNumber);
}
