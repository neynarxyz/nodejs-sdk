# StorageApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**lookupUserStorageLimit**](#lookupuserstoragelimit) | **GET** /v1/storageLimitsByFid | FID\&#39;s limits|

# **lookupUserStorageLimit**
> StorageLimitsResponse lookupUserStorageLimit()

Fetch a user\'s storage limits.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let fid: number; // (default to undefined)

const { status, data } = await apiInstance.lookupUserStorageLimit(
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] |  | defaults to undefined|


### Return type

**StorageLimitsResponse**

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

