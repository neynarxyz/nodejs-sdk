# WebhookSubscriptionFiltersCast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_author_fids** | **Array&lt;number&gt;** | Exclude casts that matches these authors. **Note:** This is applied as an AND operation against rest of the filters. Rest of the filters are bundled as an OR operation.  | [optional] [default to undefined]
**author_fids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**mentioned_fids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**parent_urls** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**root_parent_urls** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**parent_hashes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**parent_author_fids** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**text** | **string** | Regex pattern to match the text key of the cast. **Note:**  1) Regex must be parsed by Go\&#39;s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: (?i)\\\\$degen should be written as (?i)\\\\\\\\$degen  | [optional] [default to undefined]
**embeds** | **string** | Regex pattern to match the embeded_url (key embeds) of the cast. **Note:**  1) Regex must be parsed by Go\&#39;s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: \\\\b(farcaster|neynar)\\\\b should be written as \\\\\\\\b(farcaster|neynar)\\\\\\\\b  | [optional] [default to undefined]

## Example

```typescript
import { WebhookSubscriptionFiltersCast } from './api';

const instance: WebhookSubscriptionFiltersCast = {
    exclude_author_fids,
    author_fids,
    mentioned_fids,
    parent_urls,
    root_parent_urls,
    parent_hashes,
    parent_author_fids,
    text,
    embeds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
