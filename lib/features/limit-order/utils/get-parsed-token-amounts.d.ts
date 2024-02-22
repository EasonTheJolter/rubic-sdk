import BigNumber from 'bignumber.js';
import { Token, TokenAmount } from 'src/common/tokens';
import { TokenBaseStruct } from 'src/common/tokens/models/token-base-struct';
import { EvmBlockchainName } from 'src/core/blockchain/models/blockchain-name';
export declare function getParsedTokenAmounts(fromToken: Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, toToken: string | Token<EvmBlockchainName> | TokenBaseStruct<EvmBlockchainName>, fromAmount: BigNumber | string | number, toAmount: BigNumber | string | number): Promise<{
    fromTokenAmount: TokenAmount<EvmBlockchainName>;
    toTokenAmount: TokenAmount<EvmBlockchainName>;
}>;
