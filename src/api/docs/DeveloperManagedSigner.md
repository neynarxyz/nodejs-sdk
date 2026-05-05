# DeveloperManagedSigner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [optional] [default to undefined]
**public_key** | **string** | Ed25519 public key | [default to undefined]
**signer_approval_url** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { DeveloperManagedSigner } from './api';

const instance: DeveloperManagedSigner = {
    fid,
    public_key,
    signer_approval_url,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
