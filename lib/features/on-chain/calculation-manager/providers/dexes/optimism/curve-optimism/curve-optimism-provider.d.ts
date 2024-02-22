import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveOptimismTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/optimism/curve-optimism/curve-optimism-trade';
export declare class CurveOptimismProvider extends CurveAbstractProvider<CurveOptimismTrade> {
    readonly blockchain: "OPTIMISM";
    readonly Trade: typeof CurveOptimismTrade;
}
