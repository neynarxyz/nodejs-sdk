# UserDataAddAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fid** | **number** | The unique identifier (FID) of the user who created this message. FIDs are assigned sequentially when users register on the network and cannot be changed. | [default to undefined]
**timestamp** | **number** | Seconds since Farcaster Epoch (2021-01-01T00:00:00Z). Used to order messages chronologically and determine the most recent state. Must be within 10 minutes of the current time when the message is created. | [default to undefined]
**network** | [**FarcasterNetwork**](FarcasterNetwork.md) |  | [default to undefined]
**userDataBody** | [**UserDataBody**](UserDataBody.md) | Contains the type of profile metadata being updated and its new value. | [default to undefined]
**type** | [**MessageType**](MessageType.md) |  | [default to undefined]

## Example

```typescript
import { UserDataAddAllOfData } from './api';

const instance: UserDataAddAllOfData = {
    fid,
    timestamp,
    network,
    userDataBody,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
