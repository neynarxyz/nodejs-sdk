# UserViewerContext

Adds context on the viewer\'s follow relationship with the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**following** | **boolean** | Indicates if the viewer is following the user. | [default to undefined]
**followed_by** | **boolean** | Indicates if the viewer is followed by the user. | [default to undefined]
**blocking** | **boolean** | Indicates if the viewer is blocking the user. | [default to undefined]
**blocked_by** | **boolean** | Indicates if the viewer is blocked by the user. | [default to undefined]

## Example

```typescript
import { UserViewerContext } from './api';

const instance: UserViewerContext = {
    following,
    followed_by,
    blocking,
    blocked_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
