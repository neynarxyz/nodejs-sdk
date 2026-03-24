# TrendingTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The display name of the topic | [default to undefined]
**slug** | **string** | A URL-friendly unique identifier for the topic | [default to undefined]
**top_level_topic** | **string** | The top-level category the topic belongs to | [default to undefined]
**summary** | **string** | Short summary of the topic if available | [default to undefined]
**authors** | [**Array&lt;UserDehydrated&gt;**](UserDehydrated.md) | Up to five recent Farcaster users who posted about the topic | [default to undefined]

## Example

```typescript
import { TrendingTopic } from './api';

const instance: TrendingTopic = {
    name,
    slug,
    top_level_topic,
    summary,
    authors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
