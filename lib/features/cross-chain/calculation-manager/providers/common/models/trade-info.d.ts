import BigNumber from 'bignumber.js';
import { FeeInfo } from "./fee-info";
import { PathrStep } from "./pathrStep";
export interface TradeInfo {
    estimatedGas: BigNumber | null;
    feeInfo: FeeInfo;
    priceImpact: number | null;
    slippage: number;
    routePath: PathrStep[];
}
