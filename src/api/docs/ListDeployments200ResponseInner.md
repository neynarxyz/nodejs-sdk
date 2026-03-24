# ListDeployments200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Deployment ID | [default to undefined]
**display_name** | **string** | Display name for the project | [optional] [default to undefined]
**url** | **string** | Public URL for the deployment | [optional] [default to undefined]
**github_url** | **string** | GitHub repository SSH URL | [optional] [default to undefined]
**deleted_at** | **string** | Deletion timestamp | [default to undefined]
**updated_at** | **string** | Last update timestamp | [default to undefined]
**created_at** | **string** | Creation timestamp | [default to undefined]
**namespace** | **string** | Kubernetes namespace | [default to undefined]
**name** | **string** | Kubernetes deployment name | [default to undefined]
**is_ready** | **boolean** | Deployment is ready to serve app and accept prompts | [default to undefined]
**generated_app_exists** | **boolean** | Whether a generated app exists in the deployment | [default to undefined]
**generated_app_serving** | **boolean** | Whether the generated app is currently serving | [default to undefined]
**production_app_status** | [**ListDeployments200ResponseInnerProductionAppStatus**](ListDeployments200ResponseInnerProductionAppStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListDeployments200ResponseInner } from './api';

const instance: ListDeployments200ResponseInner = {
    id,
    display_name,
    url,
    github_url,
    deleted_at,
    updated_at,
    created_at,
    namespace,
    name,
    is_ready,
    generated_app_exists,
    generated_app_serving,
    production_app_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
