import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * Thrown, when toSlippage tolerance is too low to calculate Celer trade.
 */
export class LowToSlippageError extends PathrSdkError {}
