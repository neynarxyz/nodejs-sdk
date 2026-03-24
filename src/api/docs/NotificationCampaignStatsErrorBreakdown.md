# NotificationCampaignStatsErrorBreakdown

Detailed breakdown of errors encountered during notification delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_errors** | **{ [key: string]: number; }** | A record mapping delivery error types to their occurrence counts. | [optional] [default to undefined]
**http_errors** | **{ [key: string]: number; }** | A record mapping HTTP status codes to their occurrence counts. | [optional] [default to undefined]

## Example

```typescript
import { NotificationCampaignStatsErrorBreakdown } from './api';

const instance: NotificationCampaignStatsErrorBreakdown = {
    delivery_errors,
    http_errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
