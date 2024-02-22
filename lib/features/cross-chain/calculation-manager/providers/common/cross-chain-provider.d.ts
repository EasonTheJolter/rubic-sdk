import BigNumber from 'bignumber.js';
import { PathrSdkError } from 'src/common/errors';
import { PriceToken, PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Web3PrivateSupportedBlockchain } from 'src/core/blockchain/web3-private-service/models/web-private-supported-blockchain';
import { Web3PublicSupportedBlockchain } from 'src/core/blockchain/web3-public-service/models/web3-public-storage';
import { HttpClient } from 'src/core/http-client/models/http-client';
import { RequiredCrossChainOptions } from 'src/features/cross-chain/calculation-manager/models/cross-chain-options';
import { CrossChainTradeType } from 'src/features/cross-chain/calculation-manager/models/cross-chain-trade-type';
import { CalculationResult } from 'src/features/cross-chain/calculation-manager/providers/common/models/calculation-result';
import { FeeInfo } from 'src/features/cross-chain/calculation-manager/providers/common/models/fee-info';
import { PathrStep } from 'src/features/cross-chain/calculation-manager/providers/common/models/pathrStep';
import { AbiItem } from 'web3-utils';
export declare abstract class CrossChainProvider {
    static parseError(err: unknown): PathrSdkError;
    abstract readonly type: CrossChainTradeType;
    protected get httpClient(): HttpClient;
    abstract isSupportedBlockchain(fromBlockchain: BlockchainName): boolean;
    areSupportedBlockchains(fromBlockchain: BlockchainName, toBlockchain: BlockchainName): boolean;
    abstract calculate(from: PriceTokenAmount, toToken: PriceToken, options: RequiredCrossChainOptions): Promise<CalculationResult>;
    protected getWalletAddress(blockchain: Web3PrivateSupportedBlockchain): string;
    protected abstract getRoutePath(...options: unknown[]): Promise<PathrStep[]>;
    /**
     * Gets fee information.
     * @param _fromBlockchain Source network blockchain.
     * @param _providerAddress Integrator address.
     * @param _percentFeeToken Protocol fee token.
     * @param _useProxy Use pathr proxy or not.
     * @param _contractAbi Pathr Proxy contract abi.
     * @protected
     * @internal
     */
    protected getFeeInfo(_fromBlockchain: Partial<BlockchainName>, _providerAddress: string, _percentFeeToken: PriceToken, _useProxy: boolean, _contractAbi?: AbiItem[]): Promise<FeeInfo>;
    /**
     * Gets fixed fee information.
     * @param fromBlockchain Source network blockchain.
     * @param providerAddress Integrator address.
     * @param contractAddress Contract address.
     * @param contractAbi Contract ABI.
     * @protected
     * @internal
     */
    protected getFixedFee(fromBlockchain: Web3PublicSupportedBlockchain, providerAddress: string, contractAddress: string, contractAbi: AbiItem[]): Promise<BigNumber>;
    /**
     * Gets percent fee.
     * @param fromBlockchain Source network blockchain.
     * @param providerAddress Integrator address.
     * @param contractAddress Contract address.
     * @param contractAbi Contract ABI.
     * @protected
     * @internal
     */
    protected getFeePercent(fromBlockchain: Web3PublicSupportedBlockchain, providerAddress: string, contractAddress: string, contractAbi: AbiItem[]): Promise<number>;
    protected checkContractState(fromBlockchain: Web3PublicSupportedBlockchain, pathrRouter: string, contractAbi: AbiItem[]): Promise<void>;
}
