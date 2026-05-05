# BuildRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_type** | **string** | Build tool to use. \&quot;vercel\&quot; runs vercel build for production deployment. \&quot;npm\&quot; runs npm run build for dev server recovery. | [optional] [default to BuildTypeEnum_Vercel]
**deployment_id** | **string** | Deployment ID | [optional] [default to undefined]
**name** | **string** | Kubernetes deployment name | [optional] [default to undefined]
**namespace** | **string** | Kubernetes namespace | [optional] [default to undefined]

## Example

```typescript
import { BuildRequest } from './api';

const instance: BuildRequest = {
    build_type,
    deployment_id,
    name,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
