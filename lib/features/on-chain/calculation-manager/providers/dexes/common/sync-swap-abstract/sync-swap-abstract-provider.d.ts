import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/evm-on-chain-provider';
import { SyncSwapAbstractTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/sync-swap-abstract/sync-swap-abstract-trade';
export declare abstract class SyncSwapAbstractProvider extends EvmOnChainProvider {
    abstract blockchain: EvmBlockchainName;
    protected abstract dexContractAddress: string;
    protected abstract routerHelperContract: string;
    protected abstract vault: string;
    protected abstract factories: string[];
    protected abstract routeTokens: string[];
    protected abstract masterAddress: string;
    protected abstract maxTransitTokens: number;
    private readonly defaultOptions;
    get type(): OnChainTradeType;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options?: OnChainCalculationOptions): Promise<SyncSwapAbstractTrade>;
    private getAvailablePools;
}
