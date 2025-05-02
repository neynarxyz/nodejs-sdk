# MessageDataVerificationRemove

Represents a message that removes an existing blockchain address verification from a user\'s profile. This allows users to disassociate previously verified addresses from their account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**verificationRemoveBody** | [**VerificationRemoveBody**](VerificationRemoveBody.md) | Contains the blockchain address for which the verification should be removed from the user\&#39;s profile. | [default to undefined]

## Example

```typescript
import { MessageDataVerificationRemove } from './api';

const instance: MessageDataVerificationRemove = {
    fid,
    timestamp,
    network,
    verificationRemoveBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
