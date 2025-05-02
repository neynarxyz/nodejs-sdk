# Cast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**hash** | **string** |  | [default to undefined]
**parent_hash** | **string** |  | [default to undefined]
**parent_url** | **string** |  | [default to undefined]
**root_parent_url** | **string** |  | [default to undefined]
**parent_author** | [**CastParentAuthor**](CastParentAuthor.md) |  | [default to undefined]
**author** | [**User**](User.md) |  | [default to undefined]
**app** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**text** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**embeds** | [**Array&lt;Embed&gt;**](Embed.md) |  | [default to undefined]
**type** | [**CastNotificationType**](CastNotificationType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Cast } from './api';

const instance: Cast = {
    object,
    hash,
    parent_hash,
    parent_url,
    root_parent_url,
    parent_author,
    author,
    app,
    text,
    timestamp,
    embeds,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
