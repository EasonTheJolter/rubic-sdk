import { Token, TokenAmount } from "../../../../../../common/tokens";
import { CrossChainTradeType } from "../../../models/cross-chain-trade-type";
import { OnChainTradeType } from "../../../../../on-chain/calculation-manager/providers/common/models/on-chain-trade-type";
interface CrossChainStep {
    provider: CrossChainTradeType;
    type: 'cross-chain';
    path: (TokenAmount | Token)[];
}
interface OnChainStep {
    path: Token[];
    provider: OnChainTradeType;
    type: 'on-chain';
}
export type RubicStep = CrossChainStep | OnChainStep;
export {};
