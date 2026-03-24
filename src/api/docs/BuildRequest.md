# BuildRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID | [optional] [default to undefined]
**name** | **string** | Kubernetes deployment name | [optional] [default to undefined]
**namespace** | **string** | Kubernetes namespace | [optional] [default to undefined]
**build_type** | **string** | Build tool to use. \&quot;vercel\&quot; runs vercel build for production deployment. \&quot;npm\&quot; runs npm run build for dev server recovery. | [optional] [default to BuildTypeEnum_Vercel]

## Example

```typescript
import { BuildRequest } from './api';

const instance: BuildRequest = {
    deployment_id,
    name,
    namespace,
    build_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
