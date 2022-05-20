import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from '@core/blockchain/tokens/price-token-amount';
import { AbiItem } from 'web3-utils';
import { BlockchainName } from 'src/core';
import { Cache } from 'src/common';
import { ProviderData } from '@features/cross-chain/models/provider-data';
import { CrossChainContractData } from '@features/cross-chain/providers/common/cross-chain-contract-data';
import { CrossChainSupportedInstantTradeProvider } from '@features/cross-chain/providers/common/models/cross-chain-supported-instant-trade';

export abstract class CrossChainContractTrade {
    public abstract readonly fromToken: PriceTokenAmount;

    public abstract readonly toToken: PriceTokenAmount;

    public abstract readonly toTokenAmountMin: BigNumber;

    public abstract readonly contract: CrossChainContractData;

    @Cache
    public get provider(): CrossChainSupportedInstantTradeProvider {
        return this.contract.providersData[this.providerIndex].provider;
    }

    @Cache
    protected get providerData(): ProviderData {
        return this.contract.providersData[this.providerIndex];
    }

    protected constructor(
        public readonly blockchain: BlockchainName,
        private readonly providerIndex: number
    ) {}

    public abstract getMethodNameAndContractAbi(): {
        methodName: string;
        contractAbi: AbiItem[];
    };

    public abstract getMethodArguments(
        toContractTrade: CrossChainContractTrade,
        walletAddress: string,
        providerAddress: string,
        maxSlippage?: number
    ): Promise<unknown[]>;

    protected abstract modifyArgumentsForProvider(
        methodArguments: unknown[][],
        walletAddress: string
    ): Promise<void>;

    /**
     * Returns `first path` method argument, converted from instant-trade data and chosen provider.
     * Must be called on source contract.
     */
    protected abstract getFirstPath(): string[] | string;

    /**
     * Returns `second path` method argument, converted from instant-trade data and chosen provider.
     * Must be called on target contract.
     */
    public abstract getSecondPath(): string[];

    public abstract getSwapToUserMethodSignature(): string;
}
