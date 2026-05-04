# ProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID of the user | [default to undefined]
**connection_string** | **string** | Optional BYO PostgreSQL connection string. If omitted, a Neon database is auto-provisioned. | [optional] [default to undefined]

## Example

```typescript
import { ProvisionRequest } from './api';

const instance: ProvisionRequest = {
    deployment_id,
    fid,
    connection_string,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
