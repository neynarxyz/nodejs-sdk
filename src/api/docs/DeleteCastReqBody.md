# DeleteCastReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**target_hash** | **string** | Cast Hash | [default to '0xfe90f9de682273e05b201629ad2338bdcd89b6be']

## Example

```typescript
import { DeleteCastReqBody } from './api';

const instance: DeleteCastReqBody = {
    signer_uuid,
    target_hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
