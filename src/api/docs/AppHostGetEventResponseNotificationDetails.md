# AppHostGetEventResponseNotificationDetails

Details for notification setup, only present when event is notifications_enabled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** | Token to use when sending notifications to this user | [default to undefined]
**url** | **string** | URL endpoint for sending notifications | [default to undefined]

## Example

```typescript
import { AppHostGetEventResponseNotificationDetails } from './api';

const instance: AppHostGetEventResponseNotificationDetails = {
    token,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
