# DeployToVercelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID). Required if name not provided. | [optional] [default to undefined]
**fid** | **number** | Farcaster ID of the user; if not provided, namespace must be provided | [optional] [default to undefined]
**name** | **string** | Deployment name (used for both GitHub repo and Vercel project). Required if deployment_id not provided. | [optional] [default to undefined]
**namespace** | **string** | Kubernetes namespace name | [optional] [default to undefined]
**env** | **{ [key: string]: string; }** | Environment variables for the Vercel deployment | [optional] [default to undefined]

## Example

```typescript
import { DeployToVercelRequest } from './api';

const instance: DeployToVercelRequest = {
    deployment_id,
    fid,
    name,
    namespace,
    env,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
