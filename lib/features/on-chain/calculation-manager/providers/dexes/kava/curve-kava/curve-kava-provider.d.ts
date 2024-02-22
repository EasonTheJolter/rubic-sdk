import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveKavaTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/kava/curve-kava/curve-kava-trade';
export declare class CurveKavaProvider extends CurveAbstractProvider<CurveKavaTrade> {
    readonly blockchain: "KAVA";
    readonly Trade: typeof CurveKavaTrade;
}
