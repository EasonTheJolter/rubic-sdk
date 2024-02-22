import { TxStatusData } from "../models/tx-status-data";
import { BridgersCrossChainSupportedBlockchain } from "../../../cross-chain/calculation-manager/providers/bridgers-provider/constants/bridgers-cross-chain-supported-blockchain";
export declare function getBridgersTradeStatus(srcTxHash: string, fromBlockchain: BridgersCrossChainSupportedBlockchain, sourceFlag: 'pathr' | 'pathr_widget', amountOutMin?: string): Promise<TxStatusData>;
