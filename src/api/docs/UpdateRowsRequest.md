# UpdateRowsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID of the user. Required for non-admin users. | [optional] [default to undefined]
**limit** | **number** | Maximum rows to update (default: 1000) | [optional] [default to undefined]
**set** | **{ [key: string]: any; }** | Column values to update | [default to undefined]
**where** | **{ [key: string]: any; }** | WHERE conditions (equality only, required) | [default to undefined]

## Example

```typescript
import { UpdateRowsRequest } from './api';

const instance: UpdateRowsRequest = {
    deployment_id,
    fid,
    limit,
    set,
    where,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
