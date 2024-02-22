import BigNumber from 'bignumber.js';
import { PathrSdkError } from "../pathr-sdk.error";
export declare class MinAmountError extends PathrSdkError {
    readonly minAmount: BigNumber;
    readonly tokenSymbol: string;
    constructor(minAmount: BigNumber, tokenSymbol: string);
}
