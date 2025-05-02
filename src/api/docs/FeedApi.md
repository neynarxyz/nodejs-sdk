# FeedApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCastsForUser**](#fetchcastsforuser) | **GET** /farcaster/feed/user/casts | Chronologically|
|[**fetchFeed**](#fetchfeed) | **GET** /farcaster/feed | By filters|
|[**fetchFeedByChannelIds**](#fetchfeedbychannelids) | **GET** /farcaster/feed/channels | By channel IDs|
|[**fetchFeedByParentUrls**](#fetchfeedbyparenturls) | **GET** /farcaster/feed/parent_urls | By parent URLs|
|[**fetchFeedForYou**](#fetchfeedforyou) | **GET** /farcaster/feed/for_you | For you|
|[**fetchFramesOnlyFeed**](#fetchframesonlyfeed) | **GET** /farcaster/feed/frames | Casts with mini apps|
|[**fetchPopularCastsByUser**](#fetchpopularcastsbyuser) | **GET** /farcaster/feed/user/popular | 10 most popular casts|
|[**fetchRepliesAndRecastsForUser**](#fetchrepliesandrecastsforuser) | **GET** /farcaster/feed/user/replies_and_recasts | Replies and recasts|
|[**fetchTrendingFeed**](#fetchtrendingfeed) | **GET** /farcaster/feed/trending | Trending feeds|
|[**fetchUserFollowingFeed**](#fetchuserfollowingfeed) | **GET** /farcaster/feed/following | Following|

# **fetchCastsForUser**
> FeedResponse fetchCastsForUser()

Fetch casts for a given user FID in reverse chronological order. Also allows filtering by parent_url and channel

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let fid: number; //FID of user whose recent casts you want to fetch (default to undefined)
let appFid: number; //Optionally filter to casts created via a specific app FID, e.g. 9152 for Warpcast (optional) (default to undefined)
let viewerFid: number; //FID of the user viewing the feed (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let includeReplies: boolean; //Include reply casts by the author in the response, true by default (optional) (default to true)
let parentUrl: string; //Parent URL to filter the feed; mutually exclusive with channel_id (optional) (default to undefined)
let channelId: string; //Channel ID to filter the feed; mutually exclusive with parent_url (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchCastsForUser(
    fid,
    appFid,
    viewerFid,
    limit,
    cursor,
    includeReplies,
    parentUrl,
    channelId,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of user whose recent casts you want to fetch | defaults to undefined|
| **appFid** | [**number**] | Optionally filter to casts created via a specific app FID, e.g. 9152 for Warpcast | (optional) defaults to undefined|
| **viewerFid** | [**number**] | FID of the user viewing the feed | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **includeReplies** | [**boolean**] | Include reply casts by the author in the response, true by default | (optional) defaults to true|
| **parentUrl** | [**string**] | Parent URL to filter the feed; mutually exclusive with channel_id | (optional) defaults to undefined|
| **channelId** | [**string**] | Channel ID to filter the feed; mutually exclusive with parent_url | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchFeed**
> FeedResponse fetchFeed()

Fetch casts based on filters. Ensure setting the correct parameters based on the feed_type and filter_type.

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let feedType: FeedType; //Defaults to following (requires FID or address). If set to filter (requires filter_type) (default to undefined)
let filterType: FilterType; //Used when feed_type=filter. Can be set to FIDs (requires FIDs) or parent_url (requires parent_url) or channel_id (requires channel_id) (optional) (default to undefined)
let fid: number; //(Optional) FID of user whose feed you want to create. By default, the API expects this field, except if you pass a filter_type (optional) (default to undefined)
let fids: string; //Used when filter_type=FIDs . Create a feed based on a list of FIDs. Max array size is 100. Requires feed_type and filter_type. (optional) (default to undefined)
let parentUrl: string; //Used when filter_type=parent_url can be used to fetch content under any parent url e.g. FIP-2 channels on Warpcast. Requires feed_type and filter_type. (optional) (default to undefined)
let channelId: string; //Used when filter_type=channel_id can be used to fetch casts under a channel. Requires feed_type and filter_type. (optional) (default to undefined)
let membersOnly: boolean; //Used when filter_type=channel_id. Only include casts from members of the channel. True by default. (optional) (default to true)
let embedUrl: string; //Used when filter_type=embed_url. Casts with embedded URLs prefixed by this embed_url param will be returned. We normalize your given URL prefix and prepend \'https://\' if no protocol is included. Requires feed_type and filter_type. (optional) (default to undefined)
let embedTypes: Array<EmbedType>; //Used when filter_type=embed_types can be used to fetch all casts with matching content types. Requires feed_type and filter_type. (optional) (default to undefined)
let withRecasts: boolean; //Include recasts in the response, true by default (optional) (default to true)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFeed(
    feedType,
    filterType,
    fid,
    fids,
    parentUrl,
    channelId,
    membersOnly,
    embedUrl,
    embedTypes,
    withRecasts,
    limit,
    cursor,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedType** | **FeedType** | Defaults to following (requires FID or address). If set to filter (requires filter_type) | defaults to undefined|
| **filterType** | **FilterType** | Used when feed_type&#x3D;filter. Can be set to FIDs (requires FIDs) or parent_url (requires parent_url) or channel_id (requires channel_id) | (optional) defaults to undefined|
| **fid** | [**number**] | (Optional) FID of user whose feed you want to create. By default, the API expects this field, except if you pass a filter_type | (optional) defaults to undefined|
| **fids** | [**string**] | Used when filter_type&#x3D;FIDs . Create a feed based on a list of FIDs. Max array size is 100. Requires feed_type and filter_type. | (optional) defaults to undefined|
| **parentUrl** | [**string**] | Used when filter_type&#x3D;parent_url can be used to fetch content under any parent url e.g. FIP-2 channels on Warpcast. Requires feed_type and filter_type. | (optional) defaults to undefined|
| **channelId** | [**string**] | Used when filter_type&#x3D;channel_id can be used to fetch casts under a channel. Requires feed_type and filter_type. | (optional) defaults to undefined|
| **membersOnly** | [**boolean**] | Used when filter_type&#x3D;channel_id. Only include casts from members of the channel. True by default. | (optional) defaults to true|
| **embedUrl** | [**string**] | Used when filter_type&#x3D;embed_url. Casts with embedded URLs prefixed by this embed_url param will be returned. We normalize your given URL prefix and prepend \&#39;https://\&#39; if no protocol is included. Requires feed_type and filter_type. | (optional) defaults to undefined|
| **embedTypes** | **Array&lt;EmbedType&gt;** | Used when filter_type&#x3D;embed_types can be used to fetch all casts with matching content types. Requires feed_type and filter_type. | (optional) defaults to undefined|
| **withRecasts** | [**boolean**] | Include recasts in the response, true by default | (optional) defaults to true|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

# **fetchFeedByChannelIds**
> FeedResponse fetchFeedByChannelIds()

Fetch feed based on channel IDs

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let channelIds: string; //Comma separated list of up to 10 channel IDs e.g. neynar,farcaster (default to undefined)
let withRecasts: boolean; //Include recasts in the response, true by default (optional) (default to true)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let withReplies: boolean; //Include replies in the response, false by default (optional) (default to false)
let membersOnly: boolean; //Only include casts from members of the channel. True by default. (optional) (default to true)
let fids: string; //Comma separated list of FIDs to filter the feed by, up to 10 at a time (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let shouldModerate: boolean; //If true, only casts that have been liked by the moderator (if one exists) will be returned. (optional) (default to false)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFeedByChannelIds(
    channelIds,
    withRecasts,
    viewerFid,
    withReplies,
    membersOnly,
    fids,
    limit,
    cursor,
    shouldModerate,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelIds** | [**string**] | Comma separated list of up to 10 channel IDs e.g. neynar,farcaster | defaults to undefined|
| **withRecasts** | [**boolean**] | Include recasts in the response, true by default | (optional) defaults to true|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **withReplies** | [**boolean**] | Include replies in the response, false by default | (optional) defaults to false|
| **membersOnly** | [**boolean**] | Only include casts from members of the channel. True by default. | (optional) defaults to true|
| **fids** | [**string**] | Comma separated list of FIDs to filter the feed by, up to 10 at a time | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **shouldModerate** | [**boolean**] | If true, only casts that have been liked by the moderator (if one exists) will be returned. | (optional) defaults to false|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

# **fetchFeedByParentUrls**
> FeedResponse fetchFeedByParentUrls()

Fetch feed based on parent URLs

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let parentUrls: string; //Comma separated list of parent_urls (default to undefined)
let withRecasts: boolean; //Include recasts in the response, true by default (optional) (default to true)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let withReplies: boolean; //Include replies in the response, false by default (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFeedByParentUrls(
    parentUrls,
    withRecasts,
    viewerFid,
    withReplies,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parentUrls** | [**string**] | Comma separated list of parent_urls | defaults to undefined|
| **withRecasts** | [**boolean**] | Include recasts in the response, true by default | (optional) defaults to true|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **withReplies** | [**boolean**] | Include replies in the response, false by default | (optional) defaults to false|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

# **fetchFeedForYou**
> FeedResponse fetchFeedForYou()

Fetch a personalized For You feed for a user

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let fid: number; //FID of user whose feed you want to create (default to undefined)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let provider: ForYouProvider; // (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let providerMetadata: string; //provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.  (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFeedForYou(
    fid,
    viewerFid,
    provider,
    limit,
    cursor,
    providerMetadata,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of user whose feed you want to create | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **provider** | **ForYouProvider** |  | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **providerMetadata** | [**string**] | provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.  | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

# **fetchFramesOnlyFeed**
> FeedResponse fetchFramesOnlyFeed()

Fetch feed of casts with mini apps, reverse chronological order

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 25)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFramesOnlyFeed(
    limit,
    viewerFid,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

# **fetchPopularCastsByUser**
> BulkCastsResponse fetchPopularCastsByUser()

Fetch 10 most popular casts for a given user FID; popularity based on replies, likes and recasts; sorted by most popular first

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let fid: number; //FID of user whose feed you want to create (default to undefined)
let viewerFid: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.fetchPopularCastsByUser(
    fid,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of user whose feed you want to create | defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|


### Return type

**BulkCastsResponse**

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

# **fetchRepliesAndRecastsForUser**
> FeedResponse fetchRepliesAndRecastsForUser()

Fetch recent replies and recasts for a given user FID; sorted by most recent first

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let fid: number; //FID of user whose replies and recasts you want to fetch (default to undefined)
let filter: 'replies' | 'recasts' | 'all'; //filter to fetch only replies or recasts (optional) (default to 'all')
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRepliesAndRecastsForUser(
    fid,
    filter,
    limit,
    cursor,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of user whose replies and recasts you want to fetch | defaults to undefined|
| **filter** | [**&#39;replies&#39; | &#39;recasts&#39; | &#39;all&#39;**]**Array<&#39;replies&#39; &#124; &#39;recasts&#39; &#124; &#39;all&#39;>** | filter to fetch only replies or recasts | (optional) defaults to 'all'|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|


### Return type

**FeedResponse**

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

# **fetchTrendingFeed**
> FeedResponse fetchTrendingFeed()

Fetch trending casts or on the global feed or channels feeds. 7d time window available for channel feeds only.

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 10)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let timeWindow: TrendingTimeWindow; //Time window for trending casts (7d window for channel feeds only) (optional) (default to undefined)
let channelId: string; //Channel ID to filter trending casts. Less active channels might have no casts in the time window selected. Provide either `channel_id` or `parent_url`, not both. (optional) (default to undefined)
let parentUrl: string; //Parent URL to filter trending casts. Less active channels might have no casts in the time window selected. Provide either `channel_id` or `parent_url`, not both. (optional) (default to undefined)
let provider: FeedTrendingProvider; //The provider of the trending casts feed. (optional) (default to undefined)
let providerMetadata: string; //provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.  (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchTrendingFeed(
    limit,
    cursor,
    viewerFid,
    timeWindow,
    channelId,
    parentUrl,
    provider,
    providerMetadata,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 10|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **timeWindow** | **TrendingTimeWindow** | Time window for trending casts (7d window for channel feeds only) | (optional) defaults to undefined|
| **channelId** | [**string**] | Channel ID to filter trending casts. Less active channels might have no casts in the time window selected. Provide either &#x60;channel_id&#x60; or &#x60;parent_url&#x60;, not both. | (optional) defaults to undefined|
| **parentUrl** | [**string**] | Parent URL to filter trending casts. Less active channels might have no casts in the time window selected. Provide either &#x60;channel_id&#x60; or &#x60;parent_url&#x60;, not both. | (optional) defaults to undefined|
| **provider** | **FeedTrendingProvider** | The provider of the trending casts feed. | (optional) defaults to undefined|
| **providerMetadata** | [**string**] | provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.  | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserFollowingFeed**
> FeedResponse fetchUserFollowingFeed()

Fetch feed based on who a user is following

### Example

```typescript
import {
    FeedApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeedApi(configuration);

let fid: number; //FID of user whose feed you want to create (default to undefined)
let viewerFid: number; //Providing this will return a feed that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let withRecasts: boolean; //Include recasts in the response, true by default (optional) (default to true)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchUserFollowingFeed(
    fid,
    viewerFid,
    withRecasts,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of user whose feed you want to create | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a feed that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **withRecasts** | [**boolean**] | Include recasts in the response, true by default | (optional) defaults to true|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**FeedResponse**

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

