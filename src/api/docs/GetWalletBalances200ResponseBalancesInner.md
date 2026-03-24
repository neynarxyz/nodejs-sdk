# GetWalletBalances200ResponseBalancesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | [**Network**](Network.md) |  | [default to undefined]
**address** | **string** | Ethereum address | [default to undefined]
**name** | **string** | Token name | [default to undefined]
**symbol** | **string** | Token symbol | [default to undefined]
**decimals** | **number** | Token decimals | [default to undefined]
**balance** | **string** | Raw token balance | [default to undefined]
**balance_usd** | **string** | Balance value in USD | [default to undefined]
**price_usd** | **string** | Token price in USD | [default to undefined]
**image_url** | **string** | Token logo URL | [default to undefined]

## Example

```typescript
import { GetWalletBalances200ResponseBalancesInner } from './api';

const instance: GetWalletBalances200ResponseBalancesInner = {
    network,
    address,
    name,
    symbol,
    decimals,
    balance,
    balance_usd,
    price_usd,
    image_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
