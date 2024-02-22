import { CurveCeloTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/celo/curve-celo/curve-celo-trade';
import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
export declare class CurveCeloProvider extends CurveAbstractProvider<CurveCeloTrade> {
    readonly blockchain: "CELO";
    readonly Trade: typeof CurveCeloTrade;
}
