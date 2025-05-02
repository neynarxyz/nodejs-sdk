# FetchCastsByParent200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**Array&lt;CastAdd&gt;**](CastAdd.md) | An array of reply casts to the specified parent cast, ordered by oldest first. Each cast includes its content, timestamp, and other metadata. | [default to undefined]
**nextPageToken** | **string** | Base64-encoded pagination token for fetching the next page of results. An empty value indicates there are no more pages to return. Used in conjunction with the pageSize parameter to implement pagination across large result sets. | [default to undefined]

## Example

```typescript
import { FetchCastsByParent200Response } from './api';

const instance: FetchCastsByParent200Response = {
    messages,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
