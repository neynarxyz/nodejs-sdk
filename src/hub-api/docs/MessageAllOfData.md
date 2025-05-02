# MessageAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**castAddBody** | [**CastAddBody**](CastAddBody.md) | The content and metadata of the new cast, including the text, mentions, embeds, and any parent references for replies. | [default to undefined]
**targetHash** | **string** | The unique hash identifier of the cast to be removed. Must be a cast that was previously created by the same FID specified in the message. | [default to undefined]
**reactionBody** | [**ReactionBody**](ReactionBody.md) | Contains the type of reaction (like/recast) and the target content being reacted to. The target can be specified either by castId or URL. | [default to undefined]
**linkBody** | [**LinkBody**](LinkBody.md) | Contains the details of the social connection, including the type of relationship and the target user. | [default to undefined]
**verificationAddEthAddressBody** | [**VerificationAddEthAddressBody**](VerificationAddEthAddressBody.md) | Contains the blockchain address being verified, along with cryptographic proof of ownership through a signature. | [default to undefined]
**verificationRemoveBody** | [**VerificationRemoveBody**](VerificationRemoveBody.md) | Contains the blockchain address for which the verification should be removed from the user\&#39;s profile. | [default to undefined]
**userDataBody** | [**UserDataBody**](UserDataBody.md) | Contains the type of profile metadata being updated and its new value. | [default to undefined]
**usernameProofBody** | [**UserNameProof**](UserNameProof.md) |  | [default to undefined]
**frameActionBody** | [**FrameActionBody**](FrameActionBody.md) | Contains the details of the frame interaction, including which button was pressed and the associated cast and URL. | [default to undefined]

## Example

```typescript
import { MessageAllOfData } from './api';

const instance: MessageAllOfData = {
    fid,
    timestamp,
    network,
    castAddBody,
    targetHash,
    reactionBody,
    linkBody,
    verificationAddEthAddressBody,
    verificationRemoveBody,
    userDataBody,
    usernameProofBody,
    frameActionBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
