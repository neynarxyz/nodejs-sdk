# TrendingTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authors** | [**Array&lt;UserDehydrated&gt;**](UserDehydrated.md) | Up to five recent Farcaster users who posted about the topic | [default to undefined]
**name** | **string** | The display name of the topic | [default to undefined]
**slug** | **string** | A URL-friendly unique identifier for the topic | [default to undefined]
**summary** | **string** | Short summary of the topic if available | [default to undefined]
**top_level_topic** | [**TopLevelTopic**](TopLevelTopic.md) |  | [default to undefined]

## Example

```typescript
import { TrendingTopic } from './api';

const instance: TrendingTopic = {
    authors,
    name,
    slug,
    summary,
    top_level_topic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
