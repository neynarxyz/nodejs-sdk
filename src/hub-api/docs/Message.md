# Message

A Message is a delta operation on the Farcaster network that represents a state change. Messages are the fundamental unit of data in Farcaster and can represent various actions like: - Creating or removing casts (posts) - Adding or removing reactions - Following or unfollowing users - Updating profile data - Verifying Ethereum addresses  Each message contains: - A MessageData object with the actual content - A hash of the content for integrity verification - A cryptographic signature to prove authenticity - The signer\'s public key for verification  Messages are immutable once created and form an append-only log of all user actions on the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MessageAllOfData**](MessageAllOfData.md) |  | [default to undefined]
**hash** | **string** |  | [default to undefined]
**hashScheme** | [**HashScheme**](HashScheme.md) |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**signatureScheme** | [**SignatureScheme**](SignatureScheme.md) |  | [default to undefined]
**signer** | **string** |  | [default to undefined]

## Example

```typescript
import { Message } from './api';

const instance: Message = {
    data,
    hash,
    hashScheme,
    signature,
    signatureScheme,
    signer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
