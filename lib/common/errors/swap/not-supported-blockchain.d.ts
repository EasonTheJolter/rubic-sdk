import { PathrSdkError } from "../pathr-sdk.error";
/**
 * @internal
 * Thrown, when provider does not support provided blockchain.
 */
export declare class NotSupportedBlockchain extends PathrSdkError {
    constructor();
}
