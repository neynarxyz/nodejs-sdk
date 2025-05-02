# FnameApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**isFnameAvailable**](#isfnameavailable) | **GET** /farcaster/fname/availability | Check fname availability|

# **isFnameAvailable**
> FnameAvailabilityResponse isFnameAvailable()

Check if a given fname is available

### Example

```typescript
import {
    FnameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FnameApi(configuration);

let fname: string; // (default to undefined)

const { status, data } = await apiInstance.isFnameAvailable(
    fname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fname** | [**string**] |  | defaults to undefined|


### Return type

**FnameAvailabilityResponse**

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

