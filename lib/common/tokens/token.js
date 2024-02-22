"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const pathr_sdk_error_1 = require("src/common/errors/pathr-sdk.error");
const native_tokens_1 = require("src/common/tokens/constants/native-tokens");
const wrapped_addresses_1 = require("src/common/tokens/constants/wrapped-addresses");
const blockchain_1 = require("src/common/utils/blockchain");
const blockchain_name_1 = require("src/core/blockchain/models/blockchain-name");
const blockchains_info_1 = require("src/core/blockchain/utils/blockchains-info/blockchains-info");
const web3_public_service_1 = require("src/core/blockchain/web3-public-service/web3-public-service");
const web3_pure_1 = require("src/core/blockchain/web3-pure/web3-pure");
const injector_1 = require("src/core/injector/injector");
/**
 * Contains main token's fields.
 */
class Token {
    /**
     * Creates Token based on token's address and blockchain.
     * @param tokenBaseStruct Base token structure.
     */
    static async createToken(tokenBaseStruct) {
        if (tokenBaseStruct.blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BITCOIN) {
            return native_tokens_1.nativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.BITCOIN];
        }
        if (tokenBaseStruct.blockchain === blockchain_name_1.BLOCKCHAIN_NAME.ICP) {
            return native_tokens_1.nativeTokensList[blockchain_name_1.BLOCKCHAIN_NAME.ICP];
        }
        if (!web3_public_service_1.Web3PublicService.isSupportedBlockchain(tokenBaseStruct.blockchain)) {
            throw new pathr_sdk_error_1.PathrSdkError(`${tokenBaseStruct.blockchain} blockchain is not supported in Token class`);
        }
        const web3Public = injector_1.Injector.web3PublicService.getWeb3Public(tokenBaseStruct.blockchain);
        const tokenInfo = await web3Public.callForTokenInfo(tokenBaseStruct.address);
        if (tokenInfo.decimals === undefined ||
            tokenInfo.name === undefined ||
            tokenInfo.symbol === undefined) {
            throw new pathr_sdk_error_1.PathrSdkError('Error while loading token');
        }
        return new Token({
            ...tokenBaseStruct,
            name: tokenInfo.name,
            symbol: tokenInfo.symbol,
            decimals: parseInt(tokenInfo.decimals)
        });
    }
    /**
     * Creates array of Tokens based on tokens' addresses and blockchain.
     */
    static async createTokens(tokensAddresses, blockchain) {
        if (!web3_public_service_1.Web3PublicService.isSupportedBlockchain(blockchain)) {
            throw new pathr_sdk_error_1.PathrSdkError(`${blockchain} blockchain is not supported in Token class`);
        }
        const web3Public = injector_1.Injector.web3PublicService.getWeb3Public(blockchain);
        const tokenInfo = await web3Public.callForTokensInfo(tokensAddresses);
        return tokenInfo.map((tokenInfo, index) => {
            if (tokenInfo.decimals === undefined ||
                tokenInfo.name === undefined ||
                tokenInfo.symbol === undefined) {
                throw new pathr_sdk_error_1.PathrSdkError('Error while loading token');
            }
            const address = tokensAddresses?.[index];
            if (!address) {
                throw new pathr_sdk_error_1.PathrSdkError('Address has to be defined');
            }
            return new Token({
                address,
                blockchain,
                name: tokenInfo.name,
                symbol: tokenInfo.symbol,
                decimals: parseInt(tokenInfo.decimals)
            });
        });
    }
    /**
     * Maps provided tokens to their addresses.
     */
    static tokensToAddresses(tokens) {
        return tokens.map(token => token.address);
    }
    get isNative() {
        const chainType = blockchains_info_1.BlockchainsInfo.getChainType(this.blockchain);
        if (chainType && web3_pure_1.Web3Pure[chainType].isNativeAddress(this.address)) {
            return web3_pure_1.Web3Pure[blockchains_info_1.BlockchainsInfo.getChainType(this.blockchain)].isNativeAddress(this.address);
        }
        return this.address === web3_pure_1.Web3Pure[chainType].nativeTokenAddress;
    }
    get isWrapped() {
        const address = wrapped_addresses_1.wrappedAddress?.[this.blockchain];
        if (!address) {
            return false;
        }
        return (0, blockchain_1.compareAddresses)(this.address, address);
    }
    constructor(tokenStruct) {
        this.blockchain = tokenStruct.blockchain;
        this.address = tokenStruct.address;
        this.name = tokenStruct.name;
        this.symbol = tokenStruct.symbol;
        this.decimals = tokenStruct.decimals;
    }
    isEqualTo(token) {
        return (token.blockchain === this.blockchain && (0, blockchain_1.compareAddresses)(token.address, this.address));
    }
    isEqualToTokens(tokens) {
        return tokens.some(token => this.isEqualTo(token));
    }
    clone(tokenStruct) {
        return new Token({ ...this, ...tokenStruct });
    }
}
exports.Token = Token;
//# sourceMappingURL=token.js.map