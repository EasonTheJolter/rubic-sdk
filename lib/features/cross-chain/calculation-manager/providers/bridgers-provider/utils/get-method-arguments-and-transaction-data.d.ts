import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { BridgersCrossChainSupportedBlockchain } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/constants/bridgers-cross-chain-supported-blockchain';
import { EvmBridgersTransactionData } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/evm-bridgers-trade/models/evm-bridgers-transaction-data';
import { TronBridgersTransactionData } from 'src/features/cross-chain/calculation-manager/providers/bridgers-provider/tron-bridgers-trade/models/tron-bridgers-transaction-data';
import { GetContractParamsOptions } from 'src/features/cross-chain/calculation-manager/providers/common/models/get-contract-params-options';
import { MarkRequired } from 'ts-essentials';
export declare function getMethodArgumentsAndTransactionData<T extends EvmBridgersTransactionData | TronBridgersTransactionData>(from: PriceTokenAmount<BridgersCrossChainSupportedBlockchain>, fromWithoutFee: PriceTokenAmount<BridgersCrossChainSupportedBlockchain>, to: PriceTokenAmount<BridgersCrossChainSupportedBlockchain>, toTokenAmountMin: BigNumber, walletAddress: string, providerAddress: string, options: MarkRequired<GetContractParamsOptions, 'receiverAddress'>): Promise<{
    methodArguments: unknown[];
    transactionData: T;
}>;
