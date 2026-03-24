# VercelDeploymentStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the request succeeded | [default to undefined]
**project_id** | **string** | Vercel project ID | [optional] [default to undefined]
**deployment_url** | **string** | URL of the deployed Vercel app | [optional] [default to undefined]
**deployment_state** | **string** | Current state of the deployment | [optional] [default to undefined]
**created_at** | **number** | Timestamp when deployment was created | [optional] [default to undefined]
**target** | **string** | Deployment target environment | [optional] [default to undefined]

## Example

```typescript
import { VercelDeploymentStatus200Response } from './api';

const instance: VercelDeploymentStatus200Response = {
    success,
    project_id,
    deployment_url,
    deployment_state,
    created_at,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
