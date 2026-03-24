# SimulateNftMintResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | [**SimulateNftMintResponseInnerRecipient**](SimulateNftMintResponseInnerRecipient.md) |  | [default to undefined]
**function_name** | **string** |  | [default to undefined]
**args** | **Array&lt;any | null&gt;** |  | [default to undefined]
**to** | **string** | Ethereum address | [default to undefined]
**data** | **string** |  | [default to undefined]
**value** | **string** |  | [default to undefined]
**network** | **string** |  | [default to undefined]
**calldata** | **string** | Calldata for the mint transaction. | [default to undefined]
**abi** | **any** | ABI for the mint function. | [optional] [default to undefined]

## Example

```typescript
import { SimulateNftMintResponseInner } from './api';

const instance: SimulateNftMintResponseInner = {
    recipient,
    function_name,
    args,
    to,
    data,
    value,
    network,
    calldata,
    abi,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
