# Subscription


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

## Example

```typescript
import { Subscription } from './api';

const instance: Subscription = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
