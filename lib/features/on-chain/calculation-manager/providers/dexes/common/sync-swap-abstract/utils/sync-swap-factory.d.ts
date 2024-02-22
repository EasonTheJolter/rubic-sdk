import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { RoutePools } from 'src/features/on-chain/calculation-manager/providers/dexes/common/sync-swap-abstract/utils/typings';
export declare class SyncSwapFactory {
    private static normalizePool;
    private static normalizePools;
    private static transformResponse;
    static fetchRoutePools(tokenA: string, tokenB: string, account: string, vault: string, factories: string[], routeTokens: string[], masterAddress: string, routerHelperAddress: string, blockchain: EvmBlockchainName): Promise<RoutePools | null>;
}
