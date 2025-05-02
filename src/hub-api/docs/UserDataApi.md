# UserDataApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchUserData**](#fetchuserdata) | **GET** /v1/userDataByFid | Fetch UserData for a FID|

# **fetchUserData**
> FetchUserData200Response fetchUserData()

**Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead.

### Example

```typescript
import {
    UserDataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserDataApi(configuration);

let fid: number; //The FID that\'s being requested (default to undefined)
let userDataType: UserDataType; //The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserData(
    fid,
    userDataType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID that\&#39;s being requested | defaults to undefined|
| **userDataType** | **UserDataType** | The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchUserData200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested UserData. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

