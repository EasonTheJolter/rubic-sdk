import { TxStatusData } from 'src/features/common/status-manager/models/tx-status-data';
export declare class OnChainStatusManager {
    /**
     * Get Bridgers trade transaction status.
     */
    getBridgersSwapStatus(srcTxHash: string): Promise<TxStatusData>;
}
