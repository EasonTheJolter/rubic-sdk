import BigNumber from 'bignumber.js';
import { PriceToken } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainProxyFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-proxy-fee-info';
import { Exact } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/exact';
import { AerodromeTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/base/aerodrome/aerodrome-trade';
import { UniswapCalculatedInfo } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/models/uniswap-calculated-info';
import { UniswapV2CalculationOptions } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/models/uniswap-v2-calculation-options';
import { UniswapV2AbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
export declare class AerodromeProvider extends UniswapV2AbstractProvider<AerodromeTrade> {
    readonly blockchain: "BASE";
    readonly UniswapV2TradeClass: typeof AerodromeTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
    protected getAmountAndPath(from: PriceToken<EvmBlockchainName>, to: PriceToken<EvmBlockchainName>, weiAmount: BigNumber, exact: Exact, options: UniswapV2CalculationOptions, proxyFeeInfo: OnChainProxyFeeInfo | undefined, gasPriceInUsd: BigNumber | undefined): Promise<UniswapCalculatedInfo>;
}
