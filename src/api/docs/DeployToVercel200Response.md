# DeployToVercel200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_url** | **string** | URL of the deployed Vercel app | [optional] [default to undefined]
**production_url** | **string** | Production URL under neynar.app domain | [optional] [default to undefined]
**project_id** | **string** | Vercel project ID | [optional] [default to undefined]
**success** | **boolean** | Whether the deployment succeeded | [default to undefined]

## Example

```typescript
import { DeployToVercel200Response } from './api';

const instance: DeployToVercel200Response = {
    deployment_url,
    production_url,
    project_id,
    success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
