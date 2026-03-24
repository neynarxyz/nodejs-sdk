# NotificationCampaignStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intended_recipient_notification_token_count** | **number** | The total number of notification tokens for intended recipients. | [default to undefined]
**intended_recipient_app_fids** | **Array&lt;number&gt;** | An array of Farcaster FIDs of intended recipient applications. | [default to undefined]
**successful_sends** | **number** | The number of notifications successfully sent. | [default to undefined]
**successful_sends_by_app_fid** | **{ [key: string]: number; }** | A record mapping app FIDs (as strings) to the number of successful sends for that app. | [default to undefined]
**total_opens** | **number** | The total number of times notifications from this campaign have been opened. | [default to undefined]
**total_opens_by_app_fid** | **{ [key: string]: number; }** | A record mapping app FIDs (as strings) to the number of opens for that app. | [default to undefined]
**unique_opens** | **number** | The number of unique recipients who opened a notification from this campaign. | [default to undefined]
**unique_opens_by_app_fid** | **{ [key: string]: number; }** | A record mapping app FIDs (as strings) to the number of unique opens for that app. | [default to undefined]
**error_breakdown** | [**NotificationCampaignStatsErrorBreakdown**](NotificationCampaignStatsErrorBreakdown.md) |  | [default to undefined]

## Example

```typescript
import { NotificationCampaignStats } from './api';

const instance: NotificationCampaignStats = {
    intended_recipient_notification_token_count,
    intended_recipient_app_fids,
    successful_sends,
    successful_sends_by_app_fid,
    total_opens,
    total_opens_by_app_fid,
    unique_opens,
    unique_opens_by_app_fid,
    error_breakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
