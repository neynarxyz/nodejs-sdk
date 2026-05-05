# Subscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **number** |  | [default to undefined]
**contract_address** | **string** |  | [default to undefined]
**metadata** | [**SubscribedToMetadata**](SubscribedToMetadata.md) |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**owner_address** | **string** |  | [default to undefined]
**price** | [**SubscribedToPrice**](SubscribedToPrice.md) |  | [default to undefined]
**protocol_version** | **number** |  | [default to undefined]
**provider_name** | **string** |  | [optional] [default to undefined]
**tiers** | [**Array&lt;SubscriptionTier&gt;**](SubscriptionTier.md) |  | [optional] [default to undefined]
**token** | [**SubscribedToToken**](SubscribedToToken.md) |  | [default to undefined]

## Example

```typescript
import { Subscription } from './api';

const instance: Subscription = {
    chain,
    contract_address,
    metadata,
    object,
    owner_address,
    price,
    protocol_version,
    provider_name,
    tiers,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
