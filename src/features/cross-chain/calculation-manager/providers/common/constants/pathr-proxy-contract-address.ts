import { BLOCKCHAIN_NAME, BlockchainName } from 'src/core/blockchain/models/blockchain-name';

export const pathrProxyContractAddress: Record<
    BlockchainName,
    {
        gateway: string;
        router: string;
    }
> = Object.values(BLOCKCHAIN_NAME).reduce(
    (acc, blockchain) => {
        // ERC20Proxy
        let gateway = '0x3335733c454805df6a77f825f266e136FB4a3333';
        // PathrMultiProxy
        let router = '0x6AA981bFF95eDfea36Bdae98C26B274FfcafE8d3';

        // if (blockchain === BLOCKCHAIN_NAME.POLYGON) {
        //     router = '0x8669dAc053b96008bca08Da593d434ed817481eA'; // PathrMultiProxy
        //     gateway = '0x0248757451A929Fd62D6F4e88b1483379F226adC'; // ERC20Proxy
        // }

        if (blockchain === BLOCKCHAIN_NAME.POLYGON) {
            router = '0x64DfcaFd18e410cA03072e92F088df917359B0C1'; // PathrMultiProxy
            gateway = '0x4f9CEbc41d056F3f4A4bDa36F3A1a61a96984b31'; // ERC20Proxy
        }

        if (blockchain === BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN) {
            router = '0x64DfcaFd18e410cA03072e92F088df917359B0C1'; // PathrMultiProxy
            gateway = '0x4f9CEbc41d056F3f4A4bDa36F3A1a61a96984b31'; // ERC20Proxy
        }

        if (blockchain === BLOCKCHAIN_NAME.TELOS) {
            router = '0xA2d8CF32C16f070702c45a5686Fdb0a1d7171AAD';
        }
        if (blockchain === BLOCKCHAIN_NAME.ZK_SYNC) {
            router = '0xa63c029612ddaD00A269383Ab016D1e7c14E851D';
            gateway = '0x8E70e517057e7380587Ea6990dAe81cB1Ba405ce';
        }
        if (
            blockchain === BLOCKCHAIN_NAME.LINEA ||
            blockchain === BLOCKCHAIN_NAME.BASE ||
            blockchain === BLOCKCHAIN_NAME.MANTLE ||
            blockchain === BLOCKCHAIN_NAME.SCROLL ||
            blockchain === BLOCKCHAIN_NAME.MANTA_PACIFIC
        ) {
            router = '0xAf14797CcF963B1e3d028a9d51853acE16aedBA1';
        }

        return { ...acc, [blockchain]: { gateway, router } };
    },
    {} as Record<
        BlockchainName,
        {
            gateway: string;
            router: string;
        }
    >
);