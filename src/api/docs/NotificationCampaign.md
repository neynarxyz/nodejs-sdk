# NotificationCampaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the notification campaign. | [default to undefined]
**title** | **string** | The title of the notification campaign. | [default to undefined]
**body** | **string** | The body text of the notification. | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**stats** | [**NotificationCampaignStats**](NotificationCampaignStats.md) |  | [default to undefined]

## Example

```typescript
import { NotificationCampaign } from './api';

const instance: NotificationCampaign = {
    id,
    title,
    body,
    created_at,
    stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
