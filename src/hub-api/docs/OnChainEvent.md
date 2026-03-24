# OnChainEvent


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
**signerMigratedEventBody** | [**SignerMigratedEventBody**](SignerMigratedEventBody.md) |  | [default to undefined]
**idRegisterEventBody** | [**IdRegisterEventBody**](IdRegisterEventBody.md) |  | [default to undefined]
**storageRentEventBody** | [**StorageRentEventBody**](StorageRentEventBody.md) |  | [default to undefined]

## Example

```typescript
import { OnChainEvent } from './api';

const instance: OnChainEvent = {
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
    signerMigratedEventBody,
    idRegisterEventBody,
    storageRentEventBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
