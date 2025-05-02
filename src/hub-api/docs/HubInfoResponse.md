# HubInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** |  | [default to undefined]
**isSyncing** | **boolean** |  | [default to undefined]
**nickname** | **string** |  | [default to undefined]
**rootHash** | **string** |  | [default to undefined]
**dbStats** | [**DbStats**](DbStats.md) |  | [optional] [default to undefined]
**peerId** | **string** |  | [default to undefined]
**hubOperatorFid** | **number** |  | [default to undefined]

## Example

```typescript
import { HubInfoResponse } from './api';

const instance: HubInfoResponse = {
    version,
    isSyncing,
    nickname,
    rootHash,
    dbStats,
    peerId,
    hubOperatorFid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
