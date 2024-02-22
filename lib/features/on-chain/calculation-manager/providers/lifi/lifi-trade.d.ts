import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens/price-token-amount';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { OnChainTradeType } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-trade-type';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { LifiTradeStruct } from 'src/features/on-chain/calculation-manager/providers/lifi/models/lifi-trade-struct';
export declare class LifiTrade extends EvmOnChainTrade {
    /** @internal */
    static getGasLimit(lifiTradeStruct: LifiTradeStruct): Promise<BigNumber | null>;
    readonly providerGateway: string;
    readonly type: OnChainTradeType;
    private readonly route;
    private readonly _toTokenAmountMin;
    protected get spenderAddress(): string;
    get dexContractAddress(): string;
    get toTokenAmountMin(): PriceTokenAmount;
    constructor(tradeStruct: LifiTradeStruct, providerAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    private getTransactionData;
}
