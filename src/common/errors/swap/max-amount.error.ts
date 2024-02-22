import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

export class MaxAmountError extends PathrSdkError {
    constructor(public readonly maxAmount: BigNumber, public readonly tokenSymbol: string) {
        super(`Max amount is ${new BigNumber(maxAmount).toFixed()} ${tokenSymbol}`);
        Object.setPrototypeOf(this, MaxAmountError.prototype);
    }
}
