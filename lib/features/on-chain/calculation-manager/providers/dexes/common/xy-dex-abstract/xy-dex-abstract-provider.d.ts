import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/evm-on-chain-provider';
import { XyDexTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/xy-dex-abstract/xy-dex-trade';
export declare abstract class XyDexAbstractProvider extends EvmOnChainProvider {
    static readonly apiUrl = "https://aggregator-api.xy.finance/v1/";
    private readonly defaultOptions;
    get type(): OnChainTradeType;
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options?: OnChainCalculationOptions): Promise<XyDexTrade>;
    private getTradeInfo;
}
