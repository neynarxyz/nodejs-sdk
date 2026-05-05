# RemoveVerificationReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Ethereum address | [default to undefined]
**block_hash** | **string** |  | [default to undefined]
**eth_signature** | **string** |  | [default to undefined]
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key. | [default to undefined]

## Example

```typescript
import { RemoveVerificationReqBody } from './api';

const instance: RemoveVerificationReqBody = {
    address,
    block_hash,
    eth_signature,
    signer_uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
