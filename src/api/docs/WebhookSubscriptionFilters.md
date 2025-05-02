# WebhookSubscriptionFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cast_created** | [**WebhookSubscriptionFiltersCast**](WebhookSubscriptionFiltersCast.md) |  | [optional] [default to undefined]
**cast_deleted** | [**WebhookSubscriptionFiltersCast**](WebhookSubscriptionFiltersCast.md) |  | [optional] [default to undefined]
**user_created** | **object** |  | [optional] [default to undefined]
**user_updated** | [**WebhookSubscriptionFiltersUserUpdated**](WebhookSubscriptionFiltersUserUpdated.md) |  | [optional] [default to undefined]
**follow_created** | [**WebhookSubscriptionFiltersFollow**](WebhookSubscriptionFiltersFollow.md) |  | [optional] [default to undefined]
**follow_deleted** | [**WebhookSubscriptionFiltersFollow**](WebhookSubscriptionFiltersFollow.md) |  | [optional] [default to undefined]
**reaction_created** | [**WebhookSubscriptionFiltersReaction**](WebhookSubscriptionFiltersReaction.md) |  | [optional] [default to undefined]
**reaction_deleted** | [**WebhookSubscriptionFiltersReaction**](WebhookSubscriptionFiltersReaction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookSubscriptionFilters } from './api';

const instance: WebhookSubscriptionFilters = {
    cast_created,
    cast_deleted,
    user_created,
    user_updated,
    follow_created,
    follow_deleted,
    reaction_created,
    reaction_deleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
