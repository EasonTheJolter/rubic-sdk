import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { UniswapV2AbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
export declare class PegasysTrade extends UniswapV2AbstractTrade {
    static readonly contractAbi: import("web3-utils").AbiItem[];
    static readonly swapMethods: import("../../common/uniswap-v2-abstract/constants/SWAP_METHOD").ExactInputOutputSwapMethodsList;
    static get type(): OnChainTradeType;
    readonly dexContractAddress = "0x017dAd2578372CAEE5c6CddfE35eEDB3728544C4";
}
