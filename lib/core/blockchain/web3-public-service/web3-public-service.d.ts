import { BlockchainName, EvmBlockchainName, TronBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Web3PublicSupportedBlockchain } from 'src/core/blockchain/web3-public-service/models/web3-public-storage';
import { EvmWeb3Public } from 'src/core/blockchain/web3-public-service/web3-public/evm-web3-public/evm-web3-public';
import { TronWeb3Public } from 'src/core/blockchain/web3-public-service/web3-public/tron-web3-public/tron-web3-public';
import { Web3Public } from 'src/core/blockchain/web3-public-service/web3-public/web3-public';
import { RpcProviders } from 'src/core/sdk/models/rpc-provider';
export declare class Web3PublicService {
    readonly rpcProvider: RpcProviders;
    static isSupportedBlockchain(blockchain: BlockchainName): blockchain is Web3PublicSupportedBlockchain;
    private static readonly mainRpcDefaultTimeout;
    private readonly web3PublicStorage;
    private readonly createWeb3Public;
    constructor(rpcProvider: RpcProviders);
    getWeb3Public(blockchainName: EvmBlockchainName): EvmWeb3Public;
    getWeb3Public(blockchainName: TronBlockchainName): TronWeb3Public;
    getWeb3Public(blockchainName: Web3PublicSupportedBlockchain): Web3Public;
    getWeb3Public(blockchainName: BlockchainName): never;
    private setCreateWeb3Public;
    private createWeb3PublicStorage;
    private createEvmWeb3PublicProxy;
    private createTronWeb3PublicProxy;
    private createWeb3PublicProxy;
}
