# CastEmbedded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**author** | [**UserDehydrated**](UserDehydrated.md) |  | [default to undefined]
**channel** | [**ChannelDehydrated**](ChannelDehydrated.md) |  | [default to undefined]
**embeds** | [**Array&lt;EmbedDeep&gt;**](EmbedDeep.md) |  | [default to undefined]
**hash** | **string** |  | [default to undefined]
**parent_author** | [**CastParentAuthor**](CastParentAuthor.md) |  | [default to undefined]
**parent_hash** | **string** |  | [default to undefined]
**parent_url** | **string** |  | [default to undefined]
**root_parent_url** | **string** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]

## Example

```typescript
import { CastEmbedded } from './api';

const instance: CastEmbedded = {
    app,
    author,
    channel,
    embeds,
    hash,
    parent_author,
    parent_hash,
    parent_url,
    root_parent_url,
    text,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
