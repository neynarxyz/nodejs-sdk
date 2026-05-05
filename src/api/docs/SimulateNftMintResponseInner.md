# SimulateNftMintResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abi** | **any** | ABI for the mint function. | [optional] [default to undefined]
**args** | **Array&lt;any&gt;** |  | [default to undefined]
**calldata** | **string** | Calldata for the mint transaction. | [default to undefined]
**data** | **string** |  | [default to undefined]
**estimated_total_cost_wei** | **string** | Estimated total cost in wei (value + gas). Use this for price display. | [default to undefined]
**function_name** | **string** |  | [default to undefined]
**network** | **string** |  | [default to undefined]
**recipient** | [**SimulateNftMintResponseInnerRecipient**](SimulateNftMintResponseInnerRecipient.md) |  | [default to undefined]
**to** | **string** | Ethereum address | [default to undefined]
**value** | **string** |  | [default to undefined]

## Example

```typescript
import { SimulateNftMintResponseInner } from './api';

const instance: SimulateNftMintResponseInner = {
    abi,
    args,
    calldata,
    data,
    estimated_total_cost_wei,
    function_name,
    network,
    recipient,
    to,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
