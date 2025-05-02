# CastAddAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**castAddBody** | [**CastAddBody**](CastAddBody.md) | The content and metadata of the new cast, including the text, mentions, embeds, and any parent references for replies. | [default to undefined]
**type** | [**MessageType**](MessageType.md) |  | [default to undefined]

## Example

```typescript
import { CastAddAllOfData } from './api';

const instance: CastAddAllOfData = {
    fid,
    timestamp,
    network,
    castAddBody,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
