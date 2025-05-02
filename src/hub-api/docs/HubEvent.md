# HubEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **number** |  | [default to undefined]
**mergeMessageBody** | [**MergeMessageBody**](MergeMessageBody.md) |  | [default to undefined]
**pruneMessageBody** | [**PruneMessageBody**](PruneMessageBody.md) |  | [default to undefined]
**revokeMessageBody** | [**RevokeMessageBody**](RevokeMessageBody.md) |  | [default to undefined]
**mergeUsernameProofBody** | [**MergeUserNameProofBody**](MergeUserNameProofBody.md) |  | [default to undefined]
**mergeOnChainEventBody** | [**MergeOnChainEventBody**](MergeOnChainEventBody.md) |  | [default to undefined]

## Example

```typescript
import { HubEvent } from './api';

const instance: HubEvent = {
    type,
    id,
    mergeMessageBody,
    pruneMessageBody,
    revokeMessageBody,
    mergeUsernameProofBody,
    mergeOnChainEventBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
