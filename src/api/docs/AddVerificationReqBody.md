# AddVerificationReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Ethereum address | [default to undefined]
**block_hash** | **string** |  | [default to undefined]
**chain_id** | [**VerificationChainId**](VerificationChainId.md) |  | [optional] [default to undefined]
**eth_signature** | **string** |  | [default to undefined]
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key. | [default to undefined]
**verification_type** | [**VerificationType**](VerificationType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddVerificationReqBody } from './api';

const instance: AddVerificationReqBody = {
    address,
    block_hash,
    chain_id,
    eth_signature,
    signer_uuid,
    verification_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
