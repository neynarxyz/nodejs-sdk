# ChannelOrChannelDehydrated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**description_mentioned_profiles** | [**Array&lt;UserDehydrated&gt;**](UserDehydrated.md) |  | [optional] [default to undefined]
**description_mentioned_profiles_ranges** | [**Array&lt;TextRange&gt;**](TextRange.md) | Positions within the text (inclusive start, exclusive end) where each mention occurs. | [optional] [default to undefined]
**created_at** | **number** | Epoch timestamp in seconds. | [optional] [default to undefined]
**follower_count** | **number** | Number of followers the channel has. | [optional] [default to undefined]
**external_link** | [**ChannelExternalLink**](ChannelExternalLink.md) |  | [optional] [default to undefined]
**image_url** | **string** |  | [optional] [default to undefined]
**parent_url** | **string** |  | [optional] [default to undefined]
**lead** | [**User**](User.md) |  | [optional] [default to undefined]
**moderator_fids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**member_count** | **number** |  | [optional] [default to undefined]
**moderator** | [**User**](User.md) | Use &#x60;lead&#x60; instead. | [optional] [default to undefined]
**pinned_cast_hash** | **string** | Cast Hash | [optional] [default to '0xfe90f9de682273e05b201629ad2338bdcd89b6be']
**hosts** | [**Array&lt;User&gt;**](User.md) |  | [optional] [default to undefined]
**viewer_context** | [**ChannelUserContext**](ChannelUserContext.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelOrChannelDehydrated } from './api';

const instance: ChannelOrChannelDehydrated = {
    id,
    url,
    object,
    name,
    description,
    description_mentioned_profiles,
    description_mentioned_profiles_ranges,
    created_at,
    follower_count,
    external_link,
    image_url,
    parent_url,
    lead,
    moderator_fids,
    member_count,
    moderator,
    pinned_cast_hash,
    hosts,
    viewer_context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
