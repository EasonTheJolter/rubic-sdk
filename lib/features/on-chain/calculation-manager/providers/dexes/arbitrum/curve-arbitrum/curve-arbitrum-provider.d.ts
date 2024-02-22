import { CurveArbitrumTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/arbitrum/curve-arbitrum/curve-arbitrum-trade';
import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
export declare class CurveArbitrumProvider extends CurveAbstractProvider<CurveArbitrumTrade> {
    readonly blockchain: "ARBITRUM";
    readonly Trade: typeof CurveArbitrumTrade;
}
