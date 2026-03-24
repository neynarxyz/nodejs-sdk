# TransactionSendFungiblesReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **string** |  | [default to undefined]
**fungible_contract_address** | **string** | Contract address of the fungible token to send. If not provided, the default is the native token of the network. | [optional] [default to undefined]
**recipients** | [**Array&lt;TransactionSendFungiblesRecipient&gt;**](TransactionSendFungiblesRecipient.md) |  | [default to undefined]

## Example

```typescript
import { TransactionSendFungiblesReqBody } from './api';

const instance: TransactionSendFungiblesReqBody = {
    network,
    fungible_contract_address,
    recipients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
