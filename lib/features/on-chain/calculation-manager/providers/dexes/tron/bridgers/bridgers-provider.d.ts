import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { TronBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { TronOnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/tron-on-chain-provider/tron-on-chain-provider';
import { BridgersTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/tron/bridgers/bridgers-trade';
export declare class BridgersProvider extends TronOnChainProvider {
    private readonly defaultOptions;
    get type(): OnChainTradeType;
    calculate(from: PriceTokenAmount<TronBlockchainName>, toToken: PriceToken<TronBlockchainName>, options?: OnChainCalculationOptions): Promise<BridgersTrade>;
}
