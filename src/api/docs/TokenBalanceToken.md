# TokenBalanceToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**name** | **string** | The token name e.g. \&quot;Ethereum\&quot; | [default to undefined]
**symbol** | **string** | The token symbol e.g. \&quot;ETH\&quot; | [default to undefined]
**address** | **string** | The contract address of the token (omitted for native token) | [optional] [default to undefined]
**decimals** | **number** | The number of decimals the token uses | [optional] [default to undefined]

## Example

```typescript
import { TokenBalanceToken } from './api';

const instance: TokenBalanceToken = {
    object,
    name,
    symbol,
    address,
    decimals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
