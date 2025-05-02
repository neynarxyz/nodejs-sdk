# InfoApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**lookupHubInfo**](#lookuphubinfo) | **GET** /v1/info | Sync Methods|

# **lookupHubInfo**
> HubInfoResponse lookupHubInfo()

Retrieve hub information.

### Example

```typescript
import {
    InfoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InfoApi(configuration);

let dbstats: boolean; //Controls whether the response includes database statistics. When true, the response includes information about the hub\'s database state, storage usage, and performance metrics. (default to undefined)

const { status, data } = await apiInstance.lookupHubInfo(
    dbstats
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dbstats** | [**boolean**] | Controls whether the response includes database statistics. When true, the response includes information about the hub\&#39;s database state, storage usage, and performance metrics. | defaults to undefined|


### Return type

**HubInfoResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

