# NotificationCampaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the notification campaign. | [default to undefined]
**title** | **string** | The title of the notification campaign. | [default to undefined]
**body** | **string** | The body text of the notification. | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**status** | **string** | Lifecycle status of the campaign. Absent on campaigns created before async delivery was introduced. | [optional] [default to undefined]
**queued_at** | **string** | When the campaign was enqueued for async delivery. | [optional] [default to undefined]
**completed_at** | **string** | When the campaign reached a terminal state (completed/failed/canceled). Null while still queued or running. | [optional] [default to undefined]
**stats** | [**NotificationCampaignStats**](NotificationCampaignStats.md) |  | [default to undefined]

## Example

```typescript
import { NotificationCampaign } from './api';

const instance: NotificationCampaign = {
    id,
    title,
    body,
    created_at,
    status,
    queued_at,
    completed_at,
    stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
