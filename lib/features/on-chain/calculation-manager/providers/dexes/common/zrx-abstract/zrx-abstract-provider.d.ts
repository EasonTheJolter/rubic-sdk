import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/evm-on-chain-provider';
import { ZrxTrade } from 'src/features/on-chain/calculation-manager/providers/dexes/common/zrx-abstract/zrx-trade';
export declare abstract class ZrxAbstractProvider extends EvmOnChainProvider {
    private readonly defaultOptions;
    readonly supportReceiverAddress = false;
    get type(): OnChainTradeType;
    private get apiBaseUrl();
    calculate(from: PriceTokenAmount<EvmBlockchainName>, toToken: PriceToken<EvmBlockchainName>, options?: OnChainCalculationOptions): Promise<ZrxTrade>;
    /**
     * Fetches zrx data from api.
     */
    private getTradeData;
}
