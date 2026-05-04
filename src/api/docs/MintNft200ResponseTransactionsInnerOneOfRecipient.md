# MintNft200ResponseTransactionsInnerOneOfRecipient

Resolved mint recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Ethereum address | [default to undefined]
**quantity** | **number** |  | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [optional] [default to undefined]
**tokens** | [**Array&lt;MintNft200ResponseTransactionsInnerOneOfRecipientTokensInner&gt;**](MintNft200ResponseTransactionsInnerOneOfRecipientTokensInner.md) | Minted token IDs parsed from Transfer events (sync mode only). | [optional] [default to undefined]

## Example

```typescript
import { MintNft200ResponseTransactionsInnerOneOfRecipient } from './api';

const instance: MintNft200ResponseTransactionsInnerOneOfRecipient = {
    address,
    quantity,
    fid,
    tokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
