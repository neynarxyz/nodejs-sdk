# UserProfileBio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mentioned_channels** | [**Array&lt;ChannelDehydrated&gt;**](ChannelDehydrated.md) |  | [optional] [default to undefined]
**mentioned_channels_ranges** | [**Array&lt;TextRange&gt;**](TextRange.md) | Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_channels list. | [optional] [default to undefined]
**mentioned_profiles** | [**Array&lt;UserDehydrated&gt;**](UserDehydrated.md) |  | [optional] [default to undefined]
**mentioned_profiles_ranges** | [**Array&lt;TextRange&gt;**](TextRange.md) | Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_profiles list. | [optional] [default to undefined]
**text** | **string** |  | [default to undefined]

## Example

```typescript
import { UserProfileBio } from './api';

const instance: UserProfileBio = {
    mentioned_channels,
    mentioned_channels_ranges,
    mentioned_profiles,
    mentioned_profiles_ranges,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
