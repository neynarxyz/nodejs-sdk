# TransactionSendFungiblesReceipt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [default to undefined]
**reason** | **string** | Reason for failure (if status is failed) | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { TransactionSendFungiblesReceipt } from './api';

const instance: TransactionSendFungiblesReceipt = {
    amount,
    fid,
    reason,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
