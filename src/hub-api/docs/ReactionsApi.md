# ReactionsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCastReactions**](#fetchcastreactions) | **GET** /v1/reactionsByCast | On cast|
|[**fetchReactionsByTarget**](#fetchreactionsbytarget) | **GET** /v1/reactionsByTarget | To a target URL|
|[**fetchUserReactions**](#fetchuserreactions) | **GET** /v1/reactionsByFid | By FID|
|[**lookupReactionById**](#lookupreactionbyid) | **GET** /v1/reactionById | By FID or cast|

# **fetchCastReactions**
> FetchCastReactions200Response fetchCastReactions()

Retrieve all reactions (likes or recasts) on a specific cast in the Farcaster network. The cast is identified by its creator\'s FID and unique hash. This endpoint helps track engagement metrics and user interactions with specific content.

### Example

```typescript
import {
    ReactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionsApi(configuration);

let targetFid: number; //The FID of the cast\'s creator. Required to uniquely identify the cast that received the reactions. Must be used in conjunction with target_hash. (default to undefined)
let targetHash: string; //The unique hash identifier of the cast that received the reactions. This is a 40-character hexadecimal string prefixed with \'0x\' that uniquely identifies the cast within the creator\'s posts. Must be used with target_fid. (default to undefined)
let reactionType: ReactionType; // (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastReactions(
    targetFid,
    targetHash,
    reactionType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **targetFid** | [**number**] | The FID of the cast\&#39;s creator. Required to uniquely identify the cast that received the reactions. Must be used in conjunction with target_hash. | defaults to undefined|
| **targetHash** | [**string**] | The unique hash identifier of the cast that received the reactions. This is a 40-character hexadecimal string prefixed with \&#39;0x\&#39; that uniquely identifies the cast within the creator\&#39;s posts. Must be used with target_fid. | defaults to undefined|
| **reactionType** | **ReactionType** |  | defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchCastReactions200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Reactions. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchReactionsByTarget**
> FetchReactionsByTarget200Response fetchReactionsByTarget()

Fetch all reactions of a specific type (like or recast) that target a given URL. This endpoint is useful for tracking engagement with content across the Farcaster network.

### Example

```typescript
import {
    ReactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionsApi(configuration);

let url: string; //Target URL starting with \'chain://\'. (default to undefined)
let reactionType: ReactionType; // (optional) (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchReactionsByTarget(
    url,
    reactionType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | Target URL starting with \&#39;chain://\&#39;. | defaults to undefined|
| **reactionType** | **ReactionType** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchReactionsByTarget200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Reactions. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserReactions**
> FetchUserReactions200Response fetchUserReactions()

Fetch reactions by a user.

### Example

```typescript
import {
    ReactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionsApi(configuration);

let fid: number; //The FID of the reaction\'s creator (default to undefined)
let reactionType: ReactionType; // (default to undefined)
let pageSize: number; //Maximum number of messages to return in a single response (optional) (default to undefined)
let reverse: boolean; //Reverse the sort order, returning latest messages first (optional) (default to undefined)
let pageToken: string; //The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserReactions(
    fid,
    reactionType,
    pageSize,
    reverse,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the reaction\&#39;s creator | defaults to undefined|
| **reactionType** | **ReactionType** |  | defaults to undefined|
| **pageSize** | [**number**] | Maximum number of messages to return in a single response | (optional) defaults to undefined|
| **reverse** | [**boolean**] | Reverse the sort order, returning latest messages first | (optional) defaults to undefined|
| **pageToken** | [**string**] | The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page | (optional) defaults to undefined|


### Return type

**FetchUserReactions200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Reactions. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupReactionById**
> Reaction lookupReactionById()

Lookup a reaction by its FID or cast.

### Example

```typescript
import {
    ReactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionsApi(configuration);

let fid: number; //The FID of the reaction\'s creator (default to undefined)
let targetFid: number; //The FID of the cast\'s creator (default to undefined)
let targetHash: string; //The cast\'s hash (default to undefined)
let reactionType: ReactionType; // (default to undefined)

const { status, data } = await apiInstance.lookupReactionById(
    fid,
    targetFid,
    targetHash,
    reactionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the reaction\&#39;s creator | defaults to undefined|
| **targetFid** | [**number**] | The FID of the cast\&#39;s creator | defaults to undefined|
| **targetHash** | [**string**] | The cast\&#39;s hash | defaults to undefined|
| **reactionType** | **ReactionType** |  | defaults to undefined|


### Return type

**Reaction**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested Reaction. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

