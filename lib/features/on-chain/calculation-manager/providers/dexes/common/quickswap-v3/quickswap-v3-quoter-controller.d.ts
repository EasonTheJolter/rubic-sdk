import { PriceToken } from 'src/common/tokens';
import { Exact } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/exact';
import { AlgebraQuoterController } from 'src/features/on-chain/calculation-manager/providers/dexes/common/algebra/algebra-quoter-controller';
import { AlgebraRoute } from 'src/features/on-chain/calculation-manager/providers/dexes/polygon/algebra/models/algebra-route';
/**
 * Works with requests, related to Uniswap v3 liquidity pools.
 */
export declare class QuickswapV3QuoterController extends AlgebraQuoterController {
    getAllRoutes(from: PriceToken, to: PriceToken, exact: Exact, weiAmount: string, routeMaxTransitTokens: number): Promise<AlgebraRoute[]>;
}
