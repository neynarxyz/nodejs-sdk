# RegisterUserResponseSignersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**permissions** | [**Array&lt;SharedSignerPermission&gt;**](SharedSignerPermission.md) |  | [optional] [default to undefined]
**public_key** | **string** | Ed25519 public key | [default to undefined]
**signer_approval_url** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key. | [default to undefined]

## Example

```typescript
import { RegisterUserResponseSignersInner } from './api';

const instance: RegisterUserResponseSignersInner = {
    fid,
    object,
    permissions,
    public_key,
    signer_approval_url,
    status,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
