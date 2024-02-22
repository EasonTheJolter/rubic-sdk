import BigNumber from 'bignumber.js';
import { Token, TokenAmount } from 'src/common/tokens';
import { TokenBaseStruct } from 'src/common/tokens/models/token-base-struct';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { EvmBasicTransactionOptions } from 'src/core/blockchain/web3-private-service/web3-private/evm-web3-private/models/evm-basic-transaction-options';
import { SwapTransactionOptions } from 'src/features/common/models/swap-transaction-options';
import { LimitOrder } from 'src/features/limit-order/models/limit-order';
import { LimitOrderManagerOptions } from 'src/features/limit-order/models/manager-options';
import { LimitOrderSupportedBlockchain } from 'src/features/limit-order/models/supported-blockchains';
import { TransactionReceipt } from 'web3-eth';
export declare class LimitOrderManager {
    static isSupportedBlockchain(blockchain: BlockchainName): blockchain is LimitOrderSupportedBlockchain;
    private readonly apiService;
    private get web3Private();
    private get walletAddress();
    private getWeb3Public;
    private checkWalletConnected;
    needApprove(fromToken: Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, fromAmount: BigNumber | string | number): Promise<boolean>;
    approve(fromToken: Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, fromAmount: BigNumber | string | number, options: EvmBasicTransactionOptions, checkNeedApprove?: boolean): Promise<TransactionReceipt>;
    private checkAllowanceAndApprove;
    createOrder(fromToken: Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, toToken: string | Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, fromAmount: BigNumber | string | number, toAmount: BigNumber | string | number, options: LimitOrderManagerOptions): Promise<string>;
    private getLimitOrderPredicate;
    getUserTrades(userAddress: string): Promise<LimitOrder[]>;
    cancelOrder(blockchain: EvmBlockchainName, orderHash: string, options?: SwapTransactionOptions): Promise<string>;
    private getCancelCallData;
    fillOrder(takingToken: TokenAmount<EvmBlockchainName>, orderHash: string, options?: SwapTransactionOptions): Promise<string>;
    private getFillCallData;
}
