import BigNumber from 'bignumber.js';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { IzumiTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/izumi-abstract/models/izumi-trade-struct';
export declare class IzumiTrade extends EvmOnChainTrade {
    static getGasLimit(tradeStruct: IzumiTradeStruct, providerAddress: string): Promise<BigNumber | null>;
    get type(): OnChainTradeType;
    readonly dexContractAddress: string;
    private readonly swapConfig;
    private readonly strictERC20Token;
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    constructor(tradeStruct: IzumiTradeStruct, providerAddress: string);
}
