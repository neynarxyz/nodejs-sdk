# CastId

A unique identifier for a cast (post) in the Farcaster network, consisting of the creator\'s FID and a hash of the cast\'s content. This combination ensures global uniqueness across all casts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The Farcaster ID (FID) of the user who created the cast. Required to uniquely identify the cast\&#39;s author in the network. | [default to undefined]
**hash** | **string** | A unique hash that identifies a specific cast within the creator\&#39;s posts. Generated using HASH_SCHEME_BLAKE3 of the cast\&#39;s content. | [default to undefined]

## Example

```typescript
import { CastId } from './api';

const instance: CastId = {
    fid,
    hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
