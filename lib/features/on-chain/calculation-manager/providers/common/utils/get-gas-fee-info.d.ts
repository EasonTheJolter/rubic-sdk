import BigNumber from 'bignumber.js';
import { GasFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/gas-fee-info';
import { GasPriceInfo } from 'src/features/on-chain/calculation-manager/providers/dexes/common/on-chain-provider/evm-on-chain-provider/models/gas-price-info';
export declare function getGasFeeInfo(estimatedGas: BigNumber | string | number | null | undefined, gasPriceInfo: GasPriceInfo | undefined): GasFeeInfo;
