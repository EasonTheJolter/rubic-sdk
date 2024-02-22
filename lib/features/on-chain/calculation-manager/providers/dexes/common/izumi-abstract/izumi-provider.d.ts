import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { OnChainCalculationOptions } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-calculation-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { EvmOnChainProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/evm-on-chain-provider';
import { UniswapV2CalculationOptions } from 'src/features/on-chain/calculation-manager/providers/dexes/common/uniswap-v2-abstract/models/uniswap-v2-calculation-options';
export declare abstract class IzumiProvider extends EvmOnChainProvider {
    abstract readonly blockchain: EvmBlockchainName;
    get type(): OnChainTradeType;
    protected readonly defaultOptions: UniswapV2CalculationOptions;
    protected abstract readonly dexAddress: string;
    protected abstract readonly config: {
        readonly maxTransitTokens: number;
        readonly routingTokenAddresses: string[];
        readonly liquidityManagerAddress: string;
        readonly quoterAddress: string;
        readonly multicallAddress: string;
        readonly supportedFees: number[];
    };
    calculate(from: PriceTokenAmount<EvmBlockchainName>, to: PriceToken<EvmBlockchainName>, options?: OnChainCalculationOptions): Promise<EvmOnChainTrade>;
}
