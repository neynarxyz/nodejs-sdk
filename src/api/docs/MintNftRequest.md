# MintNftRequest

Request body for NFT minting operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **string** | Network to mint on. | [default to undefined]
**contract_address** | **string** | Ethereum address | [default to undefined]
**recipients** | [**Array&lt;MintNftRequestRecipientsInner&gt;**](MintNftRequestRecipientsInner.md) | List of recipients to mint to (1-200 recipients allowed). | [default to undefined]
**async** | **boolean** | If true, returns immediately after sending the transaction. | [optional] [default to undefined]

## Example

```typescript
import { MintNftRequest } from './api';

const instance: MintNftRequest = {
    network,
    contract_address,
    recipients,
    async,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
