# SimulateNftMintResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | [**SimulateNftMintResponseInnerRecipient**](SimulateNftMintResponseInnerRecipient.md) |  | [default to undefined]
**function_name** | **string** |  | [default to undefined]
**args** | **Array&lt;any&gt;** |  | [default to undefined]
**to** | **string** | Ethereum address | [default to undefined]
**data** | **string** |  | [default to undefined]
**value** | **string** |  | [default to undefined]
**estimated_total_cost_wei** | **string** | Estimated total cost in wei (value + gas). Use this for price display. | [default to undefined]
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
    estimated_total_cost_wei,
    network,
    calldata,
    abi,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
