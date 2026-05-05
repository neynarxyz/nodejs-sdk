# SendFrameNotificationsReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**SendFrameNotificationsReqBodyFilters**](SendFrameNotificationsReqBodyFilters.md) |  | [optional] [default to undefined]
**notification** | [**SendFrameNotificationsReqBodyNotification**](SendFrameNotificationsReqBodyNotification.md) |  | [default to undefined]
**target_fids** | **Array&lt;number&gt;** | An array of target FIDs to whom the notifications should be sent. Each FID must be a positive integer. Pass an empty array to send notifications to all FIDs with notifications enabled for the mini app. | [optional] [default to undefined]

## Example

```typescript
import { SendFrameNotificationsReqBody } from './api';

const instance: SendFrameNotificationsReqBody = {
    filters,
    notification,
    target_fids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
