# SendFrameNotificationsReqBodyNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of the notification. Must be between 1 and 32 characters. | [default to undefined]
**body** | **string** | The body of the notification. Must be between 1 and 128 characters. | [default to undefined]
**target_url** | **string** | The target URL to open when the user clicks the notification. Must be a valid URL. | [default to undefined]
**uuid** | **string** | An optional UUID for the notification, used as an idempotency key. | [optional] [default to undefined]

## Example

```typescript
import { SendFrameNotificationsReqBodyNotification } from './api';

const instance: SendFrameNotificationsReqBodyNotification = {
    title,
    body,
    target_url,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
