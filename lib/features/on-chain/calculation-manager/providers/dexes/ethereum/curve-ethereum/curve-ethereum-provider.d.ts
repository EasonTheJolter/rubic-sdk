import { CurveAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/curve-abstract-provider';
import { CurveEthereumTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/ethereum/curve-ethereum/curve-ethereum-trade';
export declare class CurveEthereumProvider extends CurveAbstractProvider<CurveEthereumTrade> {
    readonly blockchain: "ETH";
    readonly Trade: typeof CurveEthereumTrade;
}
