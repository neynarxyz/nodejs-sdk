# CreateDeploymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **string** | Display name for the deployment | [optional] [default to undefined]
**env** | **{ [key: string]: string; }** | Environment variables for the deployment | [optional] [default to undefined]
**fid** | **number** | Farcaster ID of the user | [default to undefined]

## Example

```typescript
import { CreateDeploymentRequest } from './api';

const instance: CreateDeploymentRequest = {
    display_name,
    env,
    fid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
