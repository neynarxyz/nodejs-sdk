# TransactionSendFungiblesReceipt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [default to undefined]
**amount** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**reason** | **string** | Reason for failure (if status is failed) | [optional] [default to undefined]

## Example

```typescript
import { TransactionSendFungiblesReceipt } from './api';

const instance: TransactionSendFungiblesReceipt = {
    fid,
    amount,
    status,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
