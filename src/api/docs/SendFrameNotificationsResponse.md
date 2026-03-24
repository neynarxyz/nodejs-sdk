# SendFrameNotificationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **string** | The unique identifier for the notification campaign. | [default to undefined]
**success_count** | **number** | The number of notifications successfully delivered. | [default to undefined]
**failure_count** | **number** | The number of notifications that failed to deliver. | [default to undefined]
**not_attempted_count** | **number** | The number of notifications not attempted (e.g., disabled tokens, invalid tokens). | [default to undefined]
**retryable_fids** | **Array&lt;number&gt;** | List of FIDs that failed due to retryable errors (rate_limited, failed, http_error). Can be used to retry sending notifications to these users. | [optional] [default to undefined]

## Example

```typescript
import { SendFrameNotificationsResponse } from './api';

const instance: SendFrameNotificationsResponse = {
    campaign_id,
    success_count,
    failure_count,
    not_attempted_count,
    retryable_fids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
