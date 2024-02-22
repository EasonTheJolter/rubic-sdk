import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
export declare class MaxAmountError extends PathrSdkError {
    readonly maxAmount: BigNumber;
    readonly tokenSymbol: string;
    constructor(maxAmount: BigNumber, tokenSymbol: string);
}
