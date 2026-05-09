# ListDeployments200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Creation timestamp | [default to undefined]
**deleted_at** | **string** | Deletion timestamp | [default to undefined]
**dev_server_state** | **string** | Dev server process state: stopped, starting, running, crashed, or hung | [optional] [default to undefined]
**display_name** | **string** | Display name for the project | [optional] [default to undefined]
**generated_app_exists** | **boolean** | Whether a generated app exists in the deployment | [default to undefined]
**generated_app_serving** | **boolean** | Whether the generated app is currently serving | [default to undefined]
**github_url** | **string** | GitHub repository SSH URL | [optional] [default to undefined]
**has_database** | **boolean** | Whether the deployment has a Neon database configured | [optional] [default to undefined]
**id** | **string** | Deployment ID | [default to undefined]
**is_ready** | **boolean** | Deployment is ready to serve app and accept prompts | [default to undefined]
**name** | **string** | Kubernetes deployment name | [default to undefined]
**namespace** | **string** | Kubernetes namespace | [default to undefined]
**production_app_status** | [**ListDeployments200ResponseInnerProductionAppStatus**](ListDeployments200ResponseInnerProductionAppStatus.md) |  | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [default to undefined]
**url** | **string** | Public URL for the deployment | [optional] [default to undefined]

## Example

```typescript
import { ListDeployments200ResponseInner } from './api';

const instance: ListDeployments200ResponseInner = {
    created_at,
    deleted_at,
    dev_server_state,
    display_name,
    generated_app_exists,
    generated_app_serving,
    github_url,
    has_database,
    id,
    is_ready,
    name,
    namespace,
    production_app_status,
    updated_at,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
