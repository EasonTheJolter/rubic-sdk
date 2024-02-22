import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { Web3Private } from 'src/core/blockchain/web3-private-service/web3-private/web3-private';
import { TypedWeb3Pure } from 'src/core/blockchain/web3-pure/typed-web3-pure/typed-web3-pure';
export declare class EmptyWeb3Private extends Web3Private {
    protected readonly Web3Pure: TypedWeb3Pure;
    constructor();
    getBlockchainName(): Promise<BlockchainName | undefined>;
}
