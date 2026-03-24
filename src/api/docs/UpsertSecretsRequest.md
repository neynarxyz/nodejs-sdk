# UpsertSecretsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID to add secrets to | [default to undefined]
**secrets** | [**Array&lt;UpsertSecretsRequestSecretsInner&gt;**](UpsertSecretsRequestSecretsInner.md) | Secrets to create | [default to undefined]

## Example

```typescript
import { UpsertSecretsRequest } from './api';

const instance: UpsertSecretsRequest = {
    deployment_id,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
