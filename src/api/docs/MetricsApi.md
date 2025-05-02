# MetricsApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCastMetrics**](#fetchcastmetrics) | **GET** /farcaster/cast/metrics | Metrics for casts|

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
let interval: '1d' | '7d' | '30d'; //Interval of time for which to fetch metrics. Choices are `1d`, `7d`, `30d` (optional) (default to undefined)
let authorFid: number; //Fid of the user whose casts you want to search (optional) (default to undefined)
let channelId: string; //Channel ID of the casts you want to search (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastMetrics(
    q,
    interval,
    authorFid,
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query string to search for casts | defaults to undefined|
| **interval** | [**&#39;1d&#39; | &#39;7d&#39; | &#39;30d&#39;**]**Array<&#39;1d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39;>** | Interval of time for which to fetch metrics. Choices are &#x60;1d&#x60;, &#x60;7d&#x60;, &#x60;30d&#x60; | (optional) defaults to undefined|
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
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

