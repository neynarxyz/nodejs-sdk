# SendFrameNotificationsReqBodyFilters

Filters to apply to the target_fids set. All filters are additive, so only users matching all filters will be notified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_fids** | **Array&lt;number&gt;** | Only send notifications to users who are not in the given FIDs. | [optional] [default to undefined]
**following_fid** | **number** | Only send notifications to users who follow the given FID. | [optional] [default to undefined]
**minimum_user_score** | **number** | Only send notifications to users with a score greater than or equal to this value. | [optional] [default to undefined]
**near_location** | [**SendFrameNotificationsReqBodyFiltersNearLocation**](SendFrameNotificationsReqBodyFiltersNearLocation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SendFrameNotificationsReqBodyFilters } from './api';

const instance: SendFrameNotificationsReqBodyFilters = {
    exclude_fids,
    following_fid,
    minimum_user_score,
    near_location,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
