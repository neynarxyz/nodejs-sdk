# DeleteDeploymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID). If provided, deletes this specific deployment. | [optional] [default to undefined]
**fid** | **number** | Farcaster ID of the user | [default to undefined]
**name** | **string** | Kubernetes deployment name. If not provided and deployment_id not provided, all deployments for the FID will be deleted | [optional] [default to undefined]
**namespace** | **string** | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | [optional] [default to undefined]

## Example

```typescript
import { DeleteDeploymentRequest } from './api';

const instance: DeleteDeploymentRequest = {
    deployment_id,
    fid,
    name,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
