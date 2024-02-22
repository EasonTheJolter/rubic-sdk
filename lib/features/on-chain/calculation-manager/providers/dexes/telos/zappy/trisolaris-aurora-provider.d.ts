import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { ZappyTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/telos/zappy/trisolaris-aurora-trade';
export declare class ZappyProvider extends UniswapV2AbstractProvider<ZappyTrade> {
    readonly blockchain: "TELOS";
    readonly UniswapV2TradeClass: typeof ZappyTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
