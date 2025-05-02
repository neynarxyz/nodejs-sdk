# AddressBalance

The token balances associated with a wallet address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**verified_address** | [**AddressBalanceVerifiedAddress**](AddressBalanceVerifiedAddress.md) |  | [default to undefined]
**token_balances** | [**Array&lt;TokenBalance&gt;**](TokenBalance.md) |  | [default to undefined]

## Example

```typescript
import { AddressBalance } from './api';

const instance: AddressBalance = {
    object,
    verified_address,
    token_balances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
