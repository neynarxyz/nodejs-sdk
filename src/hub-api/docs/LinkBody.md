# LinkBody

Defines a social connection between users in the Farcaster network. Currently used to establish following relationships, allowing users to curate their content feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**LinkType**](LinkType.md) |  | [default to undefined]
**displayTimestamp** | **number** | User-defined timestamp that preserves the original creation time when message.data.timestamp needs to be updated for compaction. Useful for maintaining chronological order in user feeds. | [optional] [default to undefined]
**targetFid** | **number** | Farcaster ID (FID). A unique identifier assigned to each user in the Farcaster network. This number is permanent and cannot be changed. FIDs are assigned sequentially when users register on the network.  | [default to undefined]

## Example

```typescript
import { LinkBody } from './api';

const instance: LinkBody = {
    type,
    displayTimestamp,
    targetFid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
