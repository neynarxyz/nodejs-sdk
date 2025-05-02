# CastEmbedded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **string** |  | [default to undefined]
**parent_hash** | **string** |  | [default to undefined]
**parent_url** | **string** |  | [default to undefined]
**root_parent_url** | **string** |  | [default to undefined]
**parent_author** | [**CastEmbeddedParentAuthor**](CastEmbeddedParentAuthor.md) |  | [default to undefined]
**author** | [**UserDehydrated**](UserDehydrated.md) |  | [default to undefined]
**app** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**text** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**type** | [**CastNotificationType**](CastNotificationType.md) |  | [default to undefined]
**embeds** | [**Array&lt;EmbedDeep&gt;**](EmbedDeep.md) |  | [default to undefined]
**channel** | [**ChannelDehydrated**](ChannelDehydrated.md) |  | [default to undefined]

## Example

```typescript
import { CastEmbedded } from './api';

const instance: CastEmbedded = {
    hash,
    parent_hash,
    parent_url,
    root_parent_url,
    parent_author,
    author,
    app,
    text,
    timestamp,
    type,
    embeds,
    channel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
