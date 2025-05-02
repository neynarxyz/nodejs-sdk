# MarkNotificationsAsSeenReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | The UUID of the signer. Signer should have atleast one write permission  | [default to undefined]
**type** | [**NotificationType**](NotificationType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MarkNotificationsAsSeenReqBody } from './api';

const instance: MarkNotificationsAsSeenReqBody = {
    signer_uuid,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
