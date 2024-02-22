import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';
import { Token } from 'src/common/tokens';
/**
 * Thrown, when user doesn't have enough balance.
 */
export declare class InsufficientFundsError extends PathrSdkError {
    readonly token: Token;
    readonly balance: BigNumber;
    readonly requiredBalance: BigNumber;
    /**
     * @param token Token to swap.
     * @param balance Token's balance on user wallet in Eth units.
     * @param requiredBalance Required token's amount to swap in Eth units.
     */
    constructor(token: Token, balance: BigNumber, requiredBalance: BigNumber);
}
