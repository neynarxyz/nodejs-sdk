# SubscribedTo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**provider_name** | **string** |  | [optional] [default to undefined]
**contract_address** | **string** |  | [default to undefined]
**chain** | **number** |  | [default to undefined]
**metadata** | [**SubscriptionMetadata**](SubscriptionMetadata.md) |  | [default to undefined]
**owner_address** | **string** |  | [default to undefined]
**price** | [**SubscriptionPrice**](SubscriptionPrice.md) |  | [default to undefined]
**tiers** | [**Array&lt;SubscriptionTier&gt;**](SubscriptionTier.md) |  | [optional] [default to undefined]
**protocol_version** | **number** |  | [default to undefined]
**token** | [**SubscriptionToken**](SubscriptionToken.md) |  | [default to undefined]
**expires_at** | **string** |  | [default to undefined]
**subscribed_at** | **string** |  | [default to undefined]
**tier** | [**SubscriptionTier**](SubscriptionTier.md) |  | [default to undefined]
**creator** | [**User**](User.md) |  | [default to undefined]

## Example

```typescript
import { SubscribedTo } from './api';

const instance: SubscribedTo = {
    object,
    provider_name,
    contract_address,
    chain,
    metadata,
    owner_address,
    price,
    tiers,
    protocol_version,
    token,
    expires_at,
    subscribed_at,
    tier,
    creator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
