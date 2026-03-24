# ExecuteSqlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID (optional for admins) | [optional] [default to undefined]
**sql** | **string** | SQL query to execute | [default to undefined]

## Example

```typescript
import { ExecuteSqlRequest } from './api';

const instance: ExecuteSqlRequest = {
    deployment_id,
    fid,
    sql,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
