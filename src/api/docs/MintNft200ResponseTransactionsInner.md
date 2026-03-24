# MintNft200ResponseTransactionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | [**MintNft200ResponseTransactionsInnerOneOf1Recipient**](MintNft200ResponseTransactionsInnerOneOf1Recipient.md) |  | [default to undefined]
**transaction_hash** | **string** | Hexadecimal number expressed as string with \&#39;0x\&#39; prefix | [default to undefined]
**receipt** | [**MintNft200ResponseTransactionsInnerOneOfReceipt**](MintNft200ResponseTransactionsInnerOneOfReceipt.md) |  | [optional] [default to undefined]
**error** | **string** | Error message for this recipient. | [default to undefined]

## Example

```typescript
import { MintNft200ResponseTransactionsInner } from './api';

const instance: MintNft200ResponseTransactionsInner = {
    recipient,
    transaction_hash,
    receipt,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
