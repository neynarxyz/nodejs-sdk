# SendFrameNotificationsReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_fids** | **Array&lt;number&gt;** | An array of target FIDs to whom the notifications should be sent. Each FID must be a positive integer, with a maximum of 100 FIDs allowed per call. | [default to undefined]
**notification** | [**SendFrameNotificationsReqBodyNotification**](SendFrameNotificationsReqBodyNotification.md) |  | [default to undefined]

## Example

```typescript
import { SendFrameNotificationsReqBody } from './api';

const instance: SendFrameNotificationsReqBody = {
    target_fids,
    notification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
