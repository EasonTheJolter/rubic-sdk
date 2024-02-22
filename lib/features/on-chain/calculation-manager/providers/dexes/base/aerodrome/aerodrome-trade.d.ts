import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV2AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
export declare class AerodromeTrade extends UniswapV2AbstractTrade {
    static get type(): OnChainTradeType;
    static readonly contractAbi: import("web3-utils").AbiItem[];
    readonly dexContractAddress = "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43";
    protected getCallParameters(receiverAddress?: string): unknown[];
}
