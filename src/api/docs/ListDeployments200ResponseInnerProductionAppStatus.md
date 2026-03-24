# ListDeployments200ResponseInnerProductionAppStatus

Production app deployment status from Vercel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **string** | Vercel project ID | [default to undefined]
**deployment_url** | **string** | Vercel deployment URL | [default to undefined]
**deployment_state** | **string** | Deployment state (e.g., READY, BUILDING, ERROR) | [default to undefined]
**created_at** | **number** | Deployment creation timestamp (Unix ms) | [default to undefined]
**target** | **string** | Deployment target (e.g., production, preview) | [optional] [default to undefined]

## Example

```typescript
import { ListDeployments200ResponseInnerProductionAppStatus } from './api';

const instance: ListDeployments200ResponseInnerProductionAppStatus = {
    project_id,
    deployment_url,
    deployment_state,
    created_at,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
