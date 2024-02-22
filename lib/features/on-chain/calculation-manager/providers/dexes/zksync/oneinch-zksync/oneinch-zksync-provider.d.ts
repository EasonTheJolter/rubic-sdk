import { OneinchAbstractProvider } from 'src/features/on-chain/calculation-manager/providers/dexes/common/oneinch-abstract/oneinch-abstract-provider';
export declare class OneinchZksyncProvider extends OneinchAbstractProvider {
    readonly blockchain: "ZK_SYNC";
    protected getAvailableProtocols(): string | undefined;
}
