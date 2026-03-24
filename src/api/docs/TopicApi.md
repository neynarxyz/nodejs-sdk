# TopicApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listTrendingTopics**](#listtrendingtopics) | **GET** /v2/farcaster/topic/trending/ | Fetch trending topics|

# **listTrendingTopics**
> TrendingTopicsResponse listTrendingTopics()

Returns a list of trending topics for casts.

### Example

```typescript
import {
    TopicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TopicApi(configuration);

let limit: number; //Number of topics to fetch. (optional) (default to 10)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.listTrendingTopics(
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of topics to fetch. | (optional) defaults to 10|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**TrendingTopicsResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

