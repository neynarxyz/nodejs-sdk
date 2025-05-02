# FidsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchFids**](#fetchfids) | **GET** /v1/fids | Fetch a list of all the FIDs|

# **fetchFids**
> FidsResponse fetchFids()

Fetch a list of all the FIDs.

### Example

```typescript
import {
    FidsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FidsApi(configuration);

let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFids(
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FidsResponse**

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

