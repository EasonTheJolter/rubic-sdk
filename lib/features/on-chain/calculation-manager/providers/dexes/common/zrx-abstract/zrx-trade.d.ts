import BigNumber from 'bignumber.js';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { ZrxTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/zrx-abstract/models/zrx-trade-struct';
export declare class ZrxTrade extends EvmOnChainTrade {
    /** @internal */
    static getGasLimit(zrxTradeStruct: ZrxTradeStruct): Promise<BigNumber | null>;
    private readonly apiTradeData;
    readonly dexContractAddress: string;
    get type(): OnChainTradeType;
    constructor(tradeStruct: ZrxTradeStruct, providerAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
}
