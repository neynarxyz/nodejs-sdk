# LinksApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchUserFollowers**](#fetchuserfollowers) | **GET** /v1/linksByTargetFid | To target FID|
|[**fetchUserFollowing**](#fetchuserfollowing) | **GET** /v1/linksByFid | From source FID|
|[**lookupUserRelation**](#lookupuserrelation) | **GET** /v1/linkById | By its FID and target FID|

# **fetchUserFollowers**
> FetchUserFollowers200Response fetchUserFollowers()

Fetch a list of users that are following a user.

### Example

```typescript
import {
    LinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LinksApi(configuration);

let targetFid: number; //The FID of the target user for this link (default to undefined)
let linkType: LinkType; // (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserFollowers(
    targetFid,
    linkType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **targetFid** | [**number**] | The FID of the target user for this link | defaults to undefined|
| **linkType** | **LinkType** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchUserFollowers200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Links. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserFollowing**
> FetchUserFollowing200Response fetchUserFollowing()

Fetch a list of users that a user is following.

### Example

```typescript
import {
    LinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LinksApi(configuration);

let fid: number; //The FID of the link\'s originator (default to undefined)
let linkType: LinkType; // (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserFollowing(
    fid,
    linkType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the link\&#39;s originator | defaults to undefined|
| **linkType** | **LinkType** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchUserFollowing200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Links. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupUserRelation**
> LinkAdd lookupUserRelation()

Lookup a link by its FID and target FID.

### Example

```typescript
import {
    LinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LinksApi(configuration);

let fid: number; //The FID of the link\'s originator (default to undefined)
let targetFid: number; //The FID of the target user for this link (default to undefined)
let linkType: LinkType; // (default to undefined)

const { status, data } = await apiInstance.lookupUserRelation(
    fid,
    targetFid,
    linkType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the link\&#39;s originator | defaults to undefined|
| **targetFid** | [**number**] | The FID of the target user for this link | defaults to undefined|
| **linkType** | **LinkType** |  | defaults to undefined|


### Return type

**LinkAdd**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Link. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

