# DeveloperManagedSigner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **string** | Ed25519 public key | [default to undefined]
**status** | **string** |  | [default to undefined]
**signer_approval_url** | **string** |  | [optional] [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user (unsigned integer) | [optional] [default to undefined]

## Example

```typescript
import { DeveloperManagedSigner } from './api';

const instance: DeveloperManagedSigner = {
    public_key,
    status,
    signer_approval_url,
    fid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
