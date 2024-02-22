import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveMoonbeamTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/moonbeam/curve-moonbeam/curve-moonbeam-trade';
export declare class CurveMoonbeamProvider extends CurveAbstractProvider<CurveMoonbeamTrade> {
    readonly blockchain: "MOONBEAM";
    readonly Trade: typeof CurveMoonbeamTrade;
}
