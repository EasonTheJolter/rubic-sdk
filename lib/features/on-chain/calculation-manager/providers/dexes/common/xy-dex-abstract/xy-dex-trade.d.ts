import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { XyDexTradeStruct } from 'src/features/on-chain/calculation-manager/providers/dexes/common/xy-dex-abstract/models/xy-dex-trade-struct';
export declare class XyDexTrade extends EvmOnChainTrade {
    /** @internal */
    static getGasLimit(tradeStruct: XyDexTradeStruct): Promise<BigNumber | null>;
    /** @internal */
    static checkIfNeedApproveAndThrowError(from: PriceTokenAmount, fromAddress: string, useProxy: boolean): Promise<void | never>;
    readonly dexContractAddress: string;
    type: "XY_DEX";
    private readonly provider;
    constructor(tradeStruct: XyDexTradeStruct, providerAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    private getTradeData;
}
