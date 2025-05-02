# FetchUserOnChainSignersEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**chainId** | **number** |  | [default to undefined]
**blockNumber** | **number** |  | [default to undefined]
**blockHash** | **string** |  | [default to undefined]
**blockTimestamp** | **number** |  | [default to undefined]
**transactionHash** | **string** |  | [default to undefined]
**logIndex** | **number** |  | [default to undefined]
**txIndex** | **number** |  | [default to undefined]
**fid** | **number** |  | [default to undefined]
**signerEventBody** | [**SignerEventBody**](SignerEventBody.md) |  | [default to undefined]
**events** | [**Array&lt;OnChainEventSigner&gt;**](OnChainEventSigner.md) |  | [default to undefined]

## Example

```typescript
import { FetchUserOnChainSignersEvents200Response } from './api';

const instance: FetchUserOnChainSignersEvents200Response = {
    type,
    chainId,
    blockNumber,
    blockHash,
    blockTimestamp,
    transactionHash,
    logIndex,
    txIndex,
    fid,
    signerEventBody,
    events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
