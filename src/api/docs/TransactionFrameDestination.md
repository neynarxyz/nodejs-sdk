# TransactionFrameDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Ethereum address | [default to undefined]
**network** | [**Networks**](Networks.md) |  | [default to undefined]
**token_contract_address** | **string** | Token contract address for the payment (e.g. 0x833589fcd6edb6e08f4c7c32d4f71b54bda02913 is USDC on Base) | [default to undefined]
**amount** | **number** | Amount to send (must be greater than 0) | [default to undefined]

## Example

```typescript
import { TransactionFrameDestination } from './api';

const instance: TransactionFrameDestination = {
    address,
    network,
    token_contract_address,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
