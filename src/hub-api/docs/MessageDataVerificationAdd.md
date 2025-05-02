# MessageDataVerificationAdd

Represents a message that adds verification of ownership for an Ethereum or Solana address to a user\'s profile. This verification proves that the user controls the specified blockchain address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**verificationAddEthAddressBody** | [**VerificationAddEthAddressBody**](VerificationAddEthAddressBody.md) | Contains the blockchain address being verified, along with cryptographic proof of ownership through a signature. | [default to undefined]

## Example

```typescript
import { MessageDataVerificationAdd } from './api';

const instance: MessageDataVerificationAdd = {
    fid,
    timestamp,
    network,
    verificationAddEthAddressBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
