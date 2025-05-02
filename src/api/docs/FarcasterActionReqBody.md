# FarcasterActionReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | The signer_uuid of the user on behalf of whom the action is being performed.  | [default to undefined]
**base_url** | **string** | The base URL of the app on which the action is being performed.  | [default to undefined]
**action** | [**FarcasterActionReqBodyAction**](FarcasterActionReqBodyAction.md) |  | [default to undefined]

## Example

```typescript
import { FarcasterActionReqBody } from './api';

const instance: FarcasterActionReqBody = {
    signer_uuid,
    base_url,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
