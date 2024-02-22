import { AerodromeTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/base/aerodrome/aerodrome-trade';
import { UniswapRoute } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/models/uniswap-route';
import { PathFactory } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/path-factory';
export declare class AerodromePathFactory extends PathFactory<AerodromeTrade> {
    private routes;
    private calculateRoutes;
    protected getAllRoutes(): Promise<UniswapRoute[]>;
}
