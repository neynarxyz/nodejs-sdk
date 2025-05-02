# FetchRelevantFrames200ResponseRelevantFramesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**Array&lt;FrameV2WithFullAuthor&gt;**](FrameV2WithFullAuthor.md) | Array of FrameV2 objects | [default to undefined]
**top_relevant_users** | [**Array&lt;User&gt;**](User.md) | Array of the most relevant users | [default to undefined]
**remaining_relevant_users** | [**Array&lt;UserDehydrated&gt;**](UserDehydrated.md) | Array of remaining relevant users in dehydrated form | [default to undefined]

## Example

```typescript
import { FetchRelevantFrames200ResponseRelevantFramesInner } from './api';

const instance: FetchRelevantFrames200ResponseRelevantFramesInner = {
    frames,
    top_relevant_users,
    remaining_relevant_users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
