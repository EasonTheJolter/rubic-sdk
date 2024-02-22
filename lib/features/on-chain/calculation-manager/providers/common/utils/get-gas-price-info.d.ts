import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { GasPriceInfo } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/models/gas-price-info';
export declare function getGasPriceInfo(blockchain: EvmBlockchainName): Promise<GasPriceInfo>;
