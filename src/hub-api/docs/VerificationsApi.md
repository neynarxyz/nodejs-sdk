# VerificationsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchVerificationsByFid**](#fetchverificationsbyfid) | **GET** /v1/verificationsByFid | Provided by an FID|

# **fetchVerificationsByFid**
> FetchVerificationsByFid200Response fetchVerificationsByFid()

Fetch verifications provided by a user.

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let fid: number; //The FID being requested (default to undefined)
let address: string; //The optional ETH address to filter by (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchVerificationsByFid(
    fid,
    address,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID being requested | defaults to undefined|
| **address** | [**string**] | The optional ETH address to filter by | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchVerificationsByFid200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Verifications. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

