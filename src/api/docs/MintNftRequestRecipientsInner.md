# MintNftRequestRecipientsInner

NFT mint recipient. Exactly one of \"address\" or \"fid\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **any** |  | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [default to undefined]
**quantity** | **number** | Quantity to mint (must be at least 1). Defaults to 1. | [optional] [default to 1]

## Example

```typescript
import { MintNftRequestRecipientsInner } from './api';

const instance: MintNftRequestRecipientsInner = {
    address,
    fid,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
