# TransactionFramePay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the transaction mini app | [default to undefined]
**url** | **string** | URL that can be used to access the transaction mini app | [default to undefined]
**type** | [**TransactionFrameType**](TransactionFrameType.md) |  | [default to undefined]
**config** | [**TransactionFrameConfig**](TransactionFrameConfig.md) |  | [default to undefined]
**status** | [**TransactionFrameStatus**](TransactionFrameStatus.md) |  | [default to undefined]
**transaction** | [**TransactionFramePayAllOfTransaction**](TransactionFramePayAllOfTransaction.md) |  | [default to undefined]

## Example

```typescript
import { TransactionFramePay } from './api';

const instance: TransactionFramePay = {
    id,
    url,
    type,
    config,
    status,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
