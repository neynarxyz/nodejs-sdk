# TransactionFrameConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_fids** | **Array&lt;number&gt;** | Optional list of FIDs that are allowed to use this transaction mini app | [optional] [default to undefined]
**line_items** | [**Array&lt;TransactionFrameLineItem&gt;**](TransactionFrameLineItem.md) | List of items included in the transaction | [default to undefined]
**action** | [**TransactionFrameAction**](TransactionFrameAction.md) | Action button for primary CTA on the transaction mini app | [optional] [default to undefined]

## Example

```typescript
import { TransactionFrameConfig } from './api';

const instance: TransactionFrameConfig = {
    allowlist_fids,
    line_items,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
