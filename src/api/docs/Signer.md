# Signer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [optional] [default to undefined]
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**public_key** | **string** | Ed25519 public key | [default to undefined]
**status** | **string** |  | [default to undefined]
**signer_approval_url** | **string** |  | [optional] [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user (unsigned integer) | [optional] [default to undefined]
**permissions** | [**Array&lt;SharedSignerPermission&gt;**](SharedSignerPermission.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Signer } from './api';

const instance: Signer = {
    object,
    signer_uuid,
    public_key,
    status,
    signer_approval_url,
    fid,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
