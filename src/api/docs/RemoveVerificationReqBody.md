# RemoveVerificationReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**address** | **string** | Ethereum address | [default to undefined]
**block_hash** | **string** |  | [default to undefined]

## Example

```typescript
import { RemoveVerificationReqBody } from './api';

const instance: RemoveVerificationReqBody = {
    signer_uuid,
    address,
    block_hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
