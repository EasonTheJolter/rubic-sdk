import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurvePulsechainTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/pulsechain/curve-pulsechain/curve-ethereum-trade';
export declare class CurvePulsechainProvider extends CurveAbstractProvider<CurvePulsechainTrade> {
    readonly blockchain: "PULSECHAIN";
    readonly Trade: typeof CurvePulsechainTrade;
}
