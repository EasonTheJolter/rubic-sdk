import BigNumber from 'bignumber.js';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { EvmOnChainTradeStruct } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/models/evm-on-chain-trade-struct';
import { BestPathsWithAmounts } from 'src/features/on-chain/calculation-manager/providers/dexes/common/sync-swap-abstract/utils/typings';
export declare class SyncSwapAbstractTrade extends EvmOnChainTrade {
    readonly dexContractAddress: string;
    private readonly bestPathWithAmounts;
    /** @internal */
    static getGasLimit(tradeStruct: EvmOnChainTradeStruct & {
        bestPathWithAmounts: BestPathsWithAmounts;
    }, dexContractAddress: string, providerAddress: string): Promise<BigNumber | null>;
    private readonly nativeSupportedFromWithoutFee;
    private readonly nativeSupportedTo;
    get type(): OnChainTradeType;
    constructor(tradeStruct: EvmOnChainTradeStruct & {
        bestPathWithAmounts: BestPathsWithAmounts;
    }, providerAddress: string, dexContractAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    getCallParameters(receiverAddress?: string): unknown[];
}
