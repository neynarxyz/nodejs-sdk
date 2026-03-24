# InsertRowsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID of the user. Required for non-admin users. | [optional] [default to undefined]
**rows** | **Array&lt;{ [key: string]: any | null; }&gt;** | Rows to insert (max 100) | [default to undefined]

## Example

```typescript
import { InsertRowsRequest } from './api';

const instance: InsertRowsRequest = {
    deployment_id,
    fid,
    rows,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
