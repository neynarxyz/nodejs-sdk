# CastsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCastsByParent**](#fetchcastsbyparent) | **GET** /v1/castsByParent | By parent cast|
|[**fetchCastsMentioningUser**](#fetchcastsmentioninguser) | **GET** /v1/castsByMention | Mentioning an FID|
|[**fetchUsersCasts**](#fetchuserscasts) | **GET** /v1/castsByFid | By FID|
|[**lookupCastByHashAndFid**](#lookupcastbyhashandfid) | **GET** /v1/castById | By FID and Hash|

# **fetchCastsByParent**
> FetchCastsByParent200Response fetchCastsByParent()

Retrieve all reply casts (responses) to a specific parent cast in the Farcaster network. Parent casts can be identified using either a combination of FID and hash, or by their URL. This endpoint enables traversal of conversation threads and retrieval of all responses to a particular cast.

### Example

```typescript
import {
    CastsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastsApi(configuration);

let fid: number; //The Farcaster ID (FID) of the parent cast\'s creator. This parameter must be used together with the \'hash\' parameter to uniquely identify a parent cast. Required only when using hash-based lookup instead of URL-based lookup. The FID is a unique identifier assigned to each Farcaster user. (optional) (default to undefined)
let hash: string; //The unique hash identifier of the parent cast. Must be used together with the \'fid\' parameter when doing hash-based lookup. This is a 40-character hexadecimal string prefixed with \'0x\' that uniquely identifies the cast within the creator\'s posts. Not required if using URL-based lookup. (optional) (default to undefined)
let url: string; //Cast URL starting with \'chain://\' (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastsByParent(
    fid,
    hash,
    url,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The Farcaster ID (FID) of the parent cast\&#39;s creator. This parameter must be used together with the \&#39;hash\&#39; parameter to uniquely identify a parent cast. Required only when using hash-based lookup instead of URL-based lookup. The FID is a unique identifier assigned to each Farcaster user. | (optional) defaults to undefined|
| **hash** | [**string**] | The unique hash identifier of the parent cast. Must be used together with the \&#39;fid\&#39; parameter when doing hash-based lookup. This is a 40-character hexadecimal string prefixed with \&#39;0x\&#39; that uniquely identifies the cast within the creator\&#39;s posts. Not required if using URL-based lookup. | (optional) defaults to undefined|
| **url** | [**string**] | Cast URL starting with \&#39;chain://\&#39; | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchCastsByParent200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response containing all reply casts to the specified parent cast, along with pagination information for traversing large result sets. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchCastsMentioningUser**
> FetchCastsMentioningUser200Response fetchCastsMentioningUser()

Fetch casts mentioning a user.

### Example

```typescript
import {
    CastsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastsApi(configuration);

let fid: number; //The FID that is mentioned in a cast (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastsMentioningUser(
    fid,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID that is mentioned in a cast | defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchCastsMentioningUser200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Casts. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUsersCasts**
> FetchUsersCasts200Response fetchUsersCasts()

Fetch user\'s casts.

### Example

```typescript
import {
    CastsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastsApi(configuration);

let fid: number; //The FID of the casts\' creator (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUsersCasts(
    fid,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the casts\&#39; creator | defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchUsersCasts200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Casts. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupCastByHashAndFid**
> CastAdd lookupCastByHashAndFid()

Lookup a cast by its FID and hash.

### Example

```typescript
import {
    CastsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastsApi(configuration);

let fid: number; //The FID of the cast\'s creator (default to undefined)
let hash: string; //The unique hash identifier of the cast. This is a 40-character hexadecimal string prefixed with \'0x\' that uniquely identifies a specific cast in the Farcaster network. (default to undefined)

const { status, data } = await apiInstance.lookupCastByHashAndFid(
    fid,
    hash
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the cast\&#39;s creator | defaults to undefined|
| **hash** | [**string**] | The unique hash identifier of the cast. This is a 40-character hexadecimal string prefixed with \&#39;0x\&#39; that uniquely identifies a specific cast in the Farcaster network. | defaults to undefined|


### Return type

**CastAdd**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Cast. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

