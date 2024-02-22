import BigNumber from 'bignumber.js';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { PancakeRouterTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/pancake-router/models/pancake-router-trade-struct';
export declare class PancakeRouterTrade extends EvmOnChainTrade {
    static getGasLimit(tradeStruct: PancakeRouterTradeStruct, providerAddress: string): Promise<BigNumber | null>;
    get type(): OnChainTradeType;
    readonly dexContractAddress: string;
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    private readonly trade;
    constructor(tradeStruct: PancakeRouterTradeStruct, providerAddress: string);
}
