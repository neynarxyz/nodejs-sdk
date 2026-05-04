# AssignCustomDomainRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID) of the miniapp | [default to undefined]
**subdomain** | **string** | The desired subdomain (without .neynar.app suffix). Must be 3-63 characters, lowercase alphanumeric and hyphens only. | [default to undefined]

## Example

```typescript
import { AssignCustomDomainRequest } from './api';

const instance: AssignCustomDomainRequest = {
    deployment_id,
    subdomain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
