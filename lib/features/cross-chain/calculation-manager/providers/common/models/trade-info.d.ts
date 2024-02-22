import BigNumber from 'bignumber.js';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
export interface TradeInfo {
    estimatedGas: BigNumber | null;
    feeInfo: FeeInfo;
    priceImpact: number | null;
    slippage: number;
    routePath: PathrStep[];
}
