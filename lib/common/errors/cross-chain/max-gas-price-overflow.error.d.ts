import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
/**
 * Thrown, when current gas price is higher, than max gas price on cross-chain contract
 * in target network.
 */
export declare class MaxGasPriceOverflowError extends PathrSdkError {
    constructor();
}
