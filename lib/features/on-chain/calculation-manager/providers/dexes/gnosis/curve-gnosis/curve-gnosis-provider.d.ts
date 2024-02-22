import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveGnosisTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/gnosis/curve-gnosis/curve-gnosis-trade';
export declare class CurveGnosisProvider extends CurveAbstractProvider<CurveGnosisTrade> {
    readonly blockchain: "GNOSIS";
    readonly Trade: typeof CurveGnosisTrade;
}
