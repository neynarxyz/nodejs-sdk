# CastWithInteractionsAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**Array&lt;Frame&gt;**](Frame.md) |  | [optional] [default to undefined]
**reactions** | [**CastWithInteractionsReactions**](CastWithInteractionsReactions.md) |  | [default to undefined]
**replies** | [**CastWithInteractionsReplies**](CastWithInteractionsReplies.md) |  | [default to undefined]
**thread_hash** | **string** |  | [default to undefined]
**mentioned_profiles** | [**Array&lt;User&gt;**](User.md) |  | [default to undefined]
**mentioned_profiles_ranges** | [**Array&lt;TextRange&gt;**](TextRange.md) | Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_profiles list.  | [default to undefined]
**mentioned_channels** | [**Array&lt;ChannelDehydrated&gt;**](ChannelDehydrated.md) |  | [default to undefined]
**mentioned_channels_ranges** | [**Array&lt;TextRange&gt;**](TextRange.md) | Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_channels list.  | [default to undefined]
**channel** | [**ChannelOrChannelDehydrated**](ChannelOrChannelDehydrated.md) |  | [default to undefined]
**viewer_context** | [**CastViewerContext**](CastViewerContext.md) |  | [optional] [default to undefined]
**author_channel_context** | [**ChannelUserContext**](ChannelUserContext.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CastWithInteractionsAllOf } from './api';

const instance: CastWithInteractionsAllOf = {
    frames,
    reactions,
    replies,
    thread_hash,
    mentioned_profiles,
    mentioned_profiles_ranges,
    mentioned_channels,
    mentioned_channels_ranges,
    channel,
    viewer_context,
    author_channel_context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
