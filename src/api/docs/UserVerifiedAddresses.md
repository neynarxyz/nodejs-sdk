# UserVerifiedAddresses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eth_addresses** | **Array&lt;string&gt;** | List of verified Ethereum addresses of the user sorted by oldest to most recent. | [default to undefined]
**sol_addresses** | **Array&lt;string&gt;** | List of verified Solana addresses of the user sorted by oldest to most recent. | [default to undefined]
**primary** | [**UserVerifiedAddressesPrimary**](UserVerifiedAddressesPrimary.md) |  | [default to undefined]

## Example

```typescript
import { UserVerifiedAddresses } from './api';

const instance: UserVerifiedAddresses = {
    eth_addresses,
    sol_addresses,
    primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
