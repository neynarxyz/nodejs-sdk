# BlockReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**blocked_fid** | **number** | The unique identifier of a farcaster user (unsigned integer) | [default to undefined]

## Example

```typescript
import { BlockReqBody } from './api';

const instance: BlockReqBody = {
    signer_uuid,
    blocked_fid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
