import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurvePolygonTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/curve-polygon/curve-polygon-trade';
export declare class CurvePolygonProvider extends CurveAbstractProvider<CurvePolygonTrade> {
    readonly blockchain: "POLYGON";
    readonly Trade: typeof CurvePolygonTrade;
}
