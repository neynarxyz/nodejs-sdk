# MessageDataFrameAction

Represents a user\'s interaction with a Farcaster Frame, which is an interactive element embedded within a cast. Frames allow users to engage with content through clickable buttons, creating interactive experiences within the Farcaster network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**frameActionBody** | [**FrameActionBody**](FrameActionBody.md) | Contains the details of the frame interaction, including which button was pressed and the associated cast and URL. | [default to undefined]

## Example

```typescript
import { MessageDataFrameAction } from './api';

const instance: MessageDataFrameAction = {
    fid,
    timestamp,
    network,
    frameActionBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
