# TransactionSendTxInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_hash** | **string** | Hash of the transaction that approved the transfer. This is only present if the fungible token is not native token of the network. | [default to undefined]
**gas_used** | **string** | Gas used for the transaction. | [default to undefined]
**network** | **string** |  | [default to undefined]
**transaction_hash** | **string** |  | [default to undefined]

## Example

```typescript
import { TransactionSendTxInfo } from './api';

const instance: TransactionSendTxInfo = {
    approval_hash,
    gas_used,
    network,
    transaction_hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
