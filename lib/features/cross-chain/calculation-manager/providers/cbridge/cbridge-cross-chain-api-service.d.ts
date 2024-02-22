import { CbridgeEstimateAmountRequest } from 'src/features/cross-chain/calculation-manager/providers/cbridge/models/cbridge-estimate-amount-request';
import { CbridgeEstimateAmountResponse } from 'src/features/cross-chain/calculation-manager/providers/cbridge/models/cbridge-estimate-amount-response';
import { CbridgeStatusResponse } from 'src/features/cross-chain/calculation-manager/providers/cbridge/models/cbridge-status-response';
import { CbridgeTransferConfigsResponse } from 'src/features/cross-chain/calculation-manager/providers/cbridge/models/cbridge-transfer-configs-response';
export declare class CbridgeCrossChainApiService {
    private static readonly apiEndpoint;
    private static readonly testnetApiEndpoint;
    static getTransferConfigs(options: {
        useTestnet: boolean;
    }): Promise<CbridgeTransferConfigsResponse>;
    static fetchEstimateAmount(requestParams: CbridgeEstimateAmountRequest, options: {
        useTestnet: boolean;
    }): Promise<CbridgeEstimateAmountResponse>;
    static fetchTradeStatus(transferId: string, options: {
        useTestnet: boolean;
    }): Promise<CbridgeStatusResponse>;
    static withdrawLiquidity(transferId: string, estimatedReceivedAmt: string, options: {
        useTestnet: boolean;
    }): Promise<void>;
}
