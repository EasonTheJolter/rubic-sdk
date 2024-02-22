import { OneinchAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/oneinch-abstract-provider';
export declare class OneinchArbitrumProvider extends OneinchAbstractProvider {
    readonly blockchain: "ARBITRUM";
    protected getAvailableProtocols(): string | undefined;
}
