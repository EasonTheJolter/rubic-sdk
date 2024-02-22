import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { CurveOnChainTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/curve-provider/models/curve-on-chain-trade-struct';
export declare abstract class CurveAbstractTrade extends EvmOnChainTrade {
    get type(): OnChainTradeType;
    private get nativeValueToSend();
    readonly dexContractAddress: string;
    private readonly poolAddress;
    constructor(tradeStruct: CurveOnChainTradeStruct, providerAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
}
