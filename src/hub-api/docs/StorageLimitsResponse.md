# StorageLimitsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**Array&lt;StorageLimit&gt;**](StorageLimit.md) |  | [default to undefined]
**units** | **number** | Total storage units bought by the user. | [default to undefined]
**unitDetails** | [**StorageLimitsResponseUnitDetails**](StorageLimitsResponseUnitDetails.md) |  | [default to undefined]
**tier_subscriptions** | [**Array&lt;StorageLimitsResponseTierSubscriptionsInner&gt;**](StorageLimitsResponseTierSubscriptionsInner.md) | List of subscription tiers for the user. Each entry describes a subscription tier and its expiration. | [optional] [default to undefined]

## Example

```typescript
import { StorageLimitsResponse } from './api';

const instance: StorageLimitsResponse = {
    limits,
    units,
    unitDetails,
    tier_subscriptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
