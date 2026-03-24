# FollowsApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchFollowSuggestions**](#fetchfollowsuggestions) | **GET** /v2/farcaster/following/suggested/ | Suggest Follows|
|[**fetchRelevantFollowers**](#fetchrelevantfollowers) | **GET** /v2/farcaster/followers/relevant/ | Relevant followers|
|[**fetchUserFollowers**](#fetchuserfollowers) | **GET** /v2/farcaster/followers/ | Followers|
|[**fetchUserFollowing**](#fetchuserfollowing) | **GET** /v2/farcaster/following/ | Following|
|[**fetchUserReciprocalFollowers**](#fetchuserreciprocalfollowers) | **GET** /v2/farcaster/followers/reciprocal/ | Reciprocal Followers|

# **fetchFollowSuggestions**
> UsersResponse fetchFollowSuggestions()

Fetch a list of suggested users to follow. Used to help users discover new users to follow

### Example

```typescript
import {
    FollowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FollowsApi(configuration);

let fid: number; //FID of the user whose following you want to fetch. (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //Providing this will return a list of users that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)

const { status, data } = await apiInstance.fetchFollowSuggestions(
    fid,
    xNeynarExperimental,
    viewerFid,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user whose following you want to fetch. | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|


### Return type

**UsersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRelevantFollowers**
> RelevantFollowersResponse fetchRelevantFollowers()

Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".

### Example

```typescript
import {
    FollowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FollowsApi(configuration);

let targetFid: number; //User who\'s profile you are looking at (default to undefined)
let viewerFid: number; //The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\'s mutes and blocks and includes `viewer_context`. (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchRelevantFollowers(
    targetFid,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **targetFid** | [**number**] | User who\&#39;s profile you are looking at | defaults to undefined|
| **viewerFid** | [**number**] | The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**RelevantFollowersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserFollowers**
> FollowersResponse fetchUserFollowers()

Returns a list of followers for a specific FID.

### Example

```typescript
import {
    FollowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FollowsApi(configuration);

let fid: number; //User who\'s profile you are looking at (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //Providing this will return a list of followers that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let sortType: 'desc_chron' | 'algorithmic'; //Sort type for fetch followers. Default is `desc_chron` (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserFollowers(
    fid,
    xNeynarExperimental,
    viewerFid,
    sortType,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | User who\&#39;s profile you are looking at | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | Providing this will return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **sortType** | [**&#39;desc_chron&#39; | &#39;algorithmic&#39;**]**Array<&#39;desc_chron&#39; &#124; &#39;algorithmic&#39;>** | Sort type for fetch followers. Default is &#x60;desc_chron&#x60; | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**FollowersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserFollowing**
> FollowersResponse fetchUserFollowing()

Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.

### Example

```typescript
import {
    FollowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FollowsApi(configuration);

let fid: number; //FID of the user whose following you want to fetch. (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //Providing this will return a list of users that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let sortType: 'desc_chron' | 'algorithmic'; //Optional parameter to sort the users based on different criteria. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserFollowing(
    fid,
    xNeynarExperimental,
    viewerFid,
    sortType,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user whose following you want to fetch. | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **sortType** | [**&#39;desc_chron&#39; | &#39;algorithmic&#39;**]**Array<&#39;desc_chron&#39; &#124; &#39;algorithmic&#39;>** | Optional parameter to sort the users based on different criteria. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**FollowersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserReciprocalFollowers**
> FetchUserReciprocalFollowers200Response fetchUserReciprocalFollowers()

Returns users who the given FID follows and they follow the FID back (reciprocal following relationship)

### Example

```typescript
import {
    FollowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FollowsApi(configuration);

let fid: number; // (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to 25)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let sortType: 'desc_chron' | 'algorithmic'; // (optional) (default to 'algorithmic')

const { status, data } = await apiInstance.fetchUserReciprocalFollowers(
    fid,
    xNeynarExperimental,
    viewerFid,
    limit,
    cursor,
    sortType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] |  | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **sortType** | [**&#39;desc_chron&#39; | &#39;algorithmic&#39;**]**Array<&#39;desc_chron&#39; &#124; &#39;algorithmic&#39;>** |  | (optional) defaults to 'algorithmic'|


### Return type

**FetchUserReciprocalFollowers200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

