import { PriceTokenAmount } from 'src/common/tokens';
import { BlockchainName } from 'src/core/blockchain/models/blockchain-name';
export declare function getFromWithoutFee<T extends BlockchainName>(from: PriceTokenAmount<T>, platformFeePercent: number | undefined): PriceTokenAmount<T>;
