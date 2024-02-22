import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

export class MinAmountError extends PathrSdkError {
    constructor(public readonly minAmount: BigNumber, public readonly tokenSymbol: string) {
        super(`Min amount is ${new BigNumber(minAmount).toFixed()} ${tokenSymbol}`);
        Object.setPrototypeOf(this, MinAmountError.prototype);
    }
}
