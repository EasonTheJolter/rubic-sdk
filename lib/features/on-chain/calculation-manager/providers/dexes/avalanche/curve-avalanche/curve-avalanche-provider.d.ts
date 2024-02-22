import { CurveAvalancheTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/avalanche/curve-avalanche/curve-avalanche-trade';
import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
export declare class CurveAvalancheProvider extends CurveAbstractProvider<CurveAvalancheTrade> {
    readonly blockchain: "AVALANCHE";
    readonly Trade: typeof CurveAvalancheTrade;
}
