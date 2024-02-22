import { AbiItem } from 'web3-utils';

export const gatewayPathrCrossChainAbi: AbiItem[] = [
    {
        inputs: [
            { internalType: 'address[]', name: 'tokens', type: 'address[]' },
            { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
            { internalType: 'bytes', name: 'facetCallData', type: 'bytes' }
        ],
        name: 'startViaPathr',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    }
];
