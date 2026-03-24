# CreateDeploymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | Farcaster ID of the user | [default to undefined]
**env** | **{ [key: string]: string; }** | Environment variables for the deployment | [optional] [default to undefined]
**display_name** | **string** | Display name for the deployment | [optional] [default to undefined]

## Example

```typescript
import { CreateDeploymentRequest } from './api';

const instance: CreateDeploymentRequest = {
    fid,
    env,
    display_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
