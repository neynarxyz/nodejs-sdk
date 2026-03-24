# AssociateDeploymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID). Required if name not provided. | [optional] [default to undefined]
**fid** | **number** | Farcaster ID of the user; if not provided, namespace must be provided | [optional] [default to undefined]
**name** | **string** | Kubernetes deployment name. Required if deployment_id not provided. | [optional] [default to undefined]
**namespace** | **string** | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | [optional] [default to undefined]
**account_association** | [**AssociateDeploymentRequestAccountAssociation**](AssociateDeploymentRequestAccountAssociation.md) |  | [default to undefined]

## Example

```typescript
import { AssociateDeploymentRequest } from './api';

const instance: AssociateDeploymentRequest = {
    deployment_id,
    fid,
    name,
    namespace,
    account_association,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
