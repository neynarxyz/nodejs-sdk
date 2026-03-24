# MetricsApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCastMetrics**](#fetchcastmetrics) | **GET** /v2/farcaster/cast/metrics/ | Metrics for casts|

# **fetchCastMetrics**
> CastsMetricsResponse fetchCastMetrics()

Fetches metrics casts matching a query

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let q: string; //Query string to search for casts (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let interval: '1d' | '7d' | '30d' | '90d' | '180d'; //Interval of time for which to fetch metrics. Default is 30d. (optional) (default to undefined)
let authorFid: number; //Fid of the user whose casts you want to search (optional) (default to undefined)
let channelId: string; //Channel ID of the casts you want to search (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastMetrics(
    q,
    xNeynarExperimental,
    interval,
    authorFid,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query string to search for casts | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **interval** | [**&#39;1d&#39; | &#39;7d&#39; | &#39;30d&#39; | &#39;90d&#39; | &#39;180d&#39;**]**Array<&#39;1d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39; &#124; &#39;90d&#39; &#124; &#39;180d&#39;>** | Interval of time for which to fetch metrics. Default is 30d. | (optional) defaults to undefined|
| **authorFid** | [**number**] | Fid of the user whose casts you want to search | (optional) defaults to undefined|
| **channelId** | [**string**] | Channel ID of the casts you want to search | (optional) defaults to undefined|


### Return type

**CastsMetricsResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

