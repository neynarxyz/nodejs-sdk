# AppHostGetEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **string** | Legacy event type corresponding to the requested event type: - frame_added: User adds a mini app to their account - frame_removed: User removes a mini app from their account - notifications_enabled: User enables notifications for a mini app - notifications_disabled: User disables notifications for a mini app | [default to undefined]
**notificationDetails** | [**AppHostGetEventResponseNotificationDetails**](AppHostGetEventResponseNotificationDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppHostGetEventResponse } from './api';

const instance: AppHostGetEventResponse = {
    event,
    notificationDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
