import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from 'src/common/tokens/price-token-amount';
import { EvmEncodeConfig } from 'src/core/blockchain/web3-pure/typed-web3-pure/evm-web3-pure/models/evm-encode-config';
import { EncodeTransactionOptions } from 'src/features/common/models/encode-transaction-options';
import { EvmOnChainTrade } from 'src/features/on-chain/calculation-manager/providers/common/on-chain-trade/evm-on-chain-trade/evm-on-chain-trade';
import { OpenOceanTradeStruct } from 'src/features/on-chain/calculation-manager/providers/open-ocean/models/open-ocean-trade-struct';
export declare class OpenOceanTrade extends EvmOnChainTrade {
    /** @internal */
    static getGasLimit(openOceanTradeStruct: OpenOceanTradeStruct): Promise<BigNumber | null>;
    readonly type: "OPEN_OCEAN";
    private readonly _toTokenAmountMin;
    static readonly nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    protected get spenderAddress(): string;
    get dexContractAddress(): string;
    get toTokenAmountMin(): PriceTokenAmount;
    constructor(tradeStruct: OpenOceanTradeStruct, providerAddress: string);
    encodeDirect(options: EncodeTransactionOptions): Promise<EvmEncodeConfig>;
    private getTransactionData;
}
