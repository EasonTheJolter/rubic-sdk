import { PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName, EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
import { ProxySupportedBlockchain } from 'src/features/common/constants/proxy-supported-blockchain';
import { OnChainProxyFeeInfo } from 'src/features/on-chain/calculation-manager/providers/common/models/on-chain-proxy-fee-info';
export declare class OnChainProxyService {
    static isSupportedBlockchain(blockchain: BlockchainName): blockchain is ProxySupportedBlockchain;
    getFeeInfo(from: PriceTokenAmount<EvmBlockchainName>, providerAddress: string): Promise<OnChainProxyFeeInfo>;
    private static handleIntegratorFee;
    private static handlePathrFee;
}
