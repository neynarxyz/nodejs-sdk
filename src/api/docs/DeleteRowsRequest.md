# DeleteRowsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID of the user. Required for non-admin users. | [optional] [default to undefined]
**where** | **{ [key: string]: any | null; }** | WHERE conditions (equality only, required) | [default to undefined]
**limit** | **number** | Maximum rows to delete (default: 1000) | [optional] [default to undefined]

## Example

```typescript
import { DeleteRowsRequest } from './api';

const instance: DeleteRowsRequest = {
    deployment_id,
    fid,
    where,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
