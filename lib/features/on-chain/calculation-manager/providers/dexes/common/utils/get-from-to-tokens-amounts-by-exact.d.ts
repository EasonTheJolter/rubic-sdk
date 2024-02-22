import BigNumber from 'bignumber.js';
import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Exact } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/exact';
export declare function getFromToTokensAmountsByExact<T extends BlockchainName>(fromToken: PriceToken<T>, toToken: PriceToken<T>, exact: Exact, initialWeiAmount: BigNumber, weiAmountWithoutFee: BigNumber, routeWeiAmount: BigNumber): {
    from: PriceTokenAmount<T>;
    to: PriceTokenAmount<T>;
    fromWithoutFee: PriceTokenAmount<T>;
};
