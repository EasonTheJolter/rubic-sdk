import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveFantomTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/fantom/curve-fantom/curve-fantom-trade';
export declare class CurveFantomProvider extends CurveAbstractProvider<CurveFantomTrade> {
    readonly blockchain: "FANTOM";
    readonly Trade: typeof CurveFantomTrade;
}
