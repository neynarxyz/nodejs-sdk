# ChannelApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAllChannels**](#fetchallchannels) | **GET** /farcaster/channel/list | Fetch all channels with their details|
|[**fetchBulkChannels**](#fetchbulkchannels) | **GET** /farcaster/channel/bulk | Bulk fetch|
|[**fetchChannelInvites**](#fetchchannelinvites) | **GET** /farcaster/channel/member/invite/list | Open invites|
|[**fetchChannelMembers**](#fetchchannelmembers) | **GET** /farcaster/channel/member/list | Fetch members|
|[**fetchFollowersForAChannel**](#fetchfollowersforachannel) | **GET** /farcaster/channel/followers | For channel|
|[**fetchRelevantFollowersForAChannel**](#fetchrelevantfollowersforachannel) | **GET** /farcaster/channel/followers/relevant | Relevant followers|
|[**fetchTrendingChannels**](#fetchtrendingchannels) | **GET** /farcaster/channel/trending | Channels by activity|
|[**fetchUserChannelMemberships**](#fetchuserchannelmemberships) | **GET** /farcaster/user/memberships/list | Member of|
|[**fetchUserChannels**](#fetchuserchannels) | **GET** /farcaster/user/channels | Following|
|[**fetchUsersActiveChannels**](#fetchusersactivechannels) | **GET** /farcaster/channel/user | Fetch channels that user is active in|
|[**followChannel**](#followchannel) | **POST** /farcaster/channel/follow | Follow a channel|
|[**inviteChannelMember**](#invitechannelmember) | **POST** /farcaster/channel/member/invite | Invite|
|[**lookupChannel**](#lookupchannel) | **GET** /farcaster/channel | By ID or parent_url|
|[**removeChannelMember**](#removechannelmember) | **DELETE** /farcaster/channel/member | Remove user|
|[**respondChannelInvite**](#respondchannelinvite) | **PUT** /farcaster/channel/member/invite | Accept or reject an invite|
|[**searchChannels**](#searchchannels) | **GET** /farcaster/channel/search | Search by ID or name|
|[**unfollowChannel**](#unfollowchannel) | **DELETE** /farcaster/channel/follow | Unfollow a channel|

# **fetchAllChannels**
> ChannelListResponse fetchAllChannels()

Returns a list of all channels with their details

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchAllChannels(
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ChannelListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchBulkChannels**
> ChannelResponseBulk fetchBulkChannels()

Returns details of multiple channels

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let ids: string; //Comma separated list of channel IDs or parent_urls, up to 100 at a time (default to undefined)
let type: ChannelType; //Type of identifier being used to query the channels. Defaults to ID. (optional) (default to undefined)
let viewerFid: number; //FID of the user viewing the channels. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchBulkChannels(
    ids,
    type,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ids** | [**string**] | Comma separated list of channel IDs or parent_urls, up to 100 at a time | defaults to undefined|
| **type** | **ChannelType** | Type of identifier being used to query the channels. Defaults to ID. | (optional) defaults to undefined|
| **viewerFid** | [**number**] | FID of the user viewing the channels. | (optional) defaults to undefined|


### Return type

**ChannelResponseBulk**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchChannelInvites**
> ChannelMemberInviteListResponse fetchChannelInvites()

Fetch a list of invites, either in a channel or for a user. If both are provided, open channel invite for that user is returned.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelId: string; //Channel ID for the channel being queried (optional) (default to undefined)
let invitedFid: number; //FID of the user being invited (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchChannelInvites(
    channelId,
    invitedFid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] | Channel ID for the channel being queried | (optional) defaults to undefined|
| **invitedFid** | [**number**] | FID of the user being invited | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ChannelMemberInviteListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchChannelMembers**
> ChannelMemberListResponse fetchChannelMembers()

Fetch a list of members in a channel

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelId: string; //Channel ID for the channel being queried (default to undefined)
let fid: number; //FID of the user being queried. Specify this to check if a user is a member of the channel without paginating through all members. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchChannelMembers(
    channelId,
    fid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] | Channel ID for the channel being queried | defaults to undefined|
| **fid** | [**number**] | FID of the user being queried. Specify this to check if a user is a member of the channel without paginating through all members. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**ChannelMemberListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchFollowersForAChannel**
> UsersResponse fetchFollowersForAChannel()

Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let id: string; //Channel ID for the channel being queried (default to undefined)
let viewerFid: number; //Providing this will return a list of followers that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let limit: number; //Number of followers to fetch (optional) (default to 25)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchFollowersForAChannel(
    id,
    viewerFid,
    cursor,
    limit,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Channel ID for the channel being queried | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of followers to fetch | (optional) defaults to 25|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


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
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRelevantFollowersForAChannel**
> RelevantFollowersResponse fetchRelevantFollowersForAChannel()

Returns a list of relevant channel followers for a specific FID. This usually shows on a channel as \"X, Y, Z follow this channel\".

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let id: string; //Channel ID being queried (default to undefined)
let viewerFid: number; //The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\'s mutes and blocks and includes `viewer_context`. (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchRelevantFollowersForAChannel(
    id,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Channel ID being queried | defaults to undefined|
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
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchTrendingChannels**
> TrendingChannelResponse fetchTrendingChannels()

Returns a list of trending channels based on activity

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let timeWindow: '1d' | '7d' | '30d'; // (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 10)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchTrendingChannels(
    timeWindow,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeWindow** | [**&#39;1d&#39; | &#39;7d&#39; | &#39;30d&#39;**]**Array<&#39;1d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39;>** |  | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 10|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**TrendingChannelResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserChannelMemberships**
> ChannelMemberListResponse fetchUserChannelMemberships()

Returns a list of all channels with their details that an FID is a member of. Data may have a delay of up to 1 hour.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let fid: number; //The FID of the user. (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserChannelMemberships(
    fid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the user. | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ChannelMemberListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserChannels**
> ChannelListResponse fetchUserChannels()

Returns a list of all channels with their details that a FID follows.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let fid: number; //The FID of the user. (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserChannels(
    fid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the user. | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ChannelListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUsersActiveChannels**
> UsersActiveChannelsResponse fetchUsersActiveChannels()

Fetches all channels that a user has casted in, in reverse chronological order.

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let fid: number; //The user\'s FID (identifier) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUsersActiveChannels(
    fid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The user\&#39;s FID (identifier) | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**UsersActiveChannelsResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**400** | Bad Request |  -  |
|**404** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followChannel**
> OperationResponse followChannel(channelFollowReqBody)

Follow a channel

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    ChannelFollowReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelFollowReqBody: ChannelFollowReqBody; //

const { status, data } = await apiInstance.followChannel(
    channelFollowReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelFollowReqBody** | **ChannelFollowReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteChannelMember**
> OperationResponse inviteChannelMember(inviteChannelMemberReqBody)

Invite a user to a channel

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    InviteChannelMemberReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let inviteChannelMemberReqBody: InviteChannelMemberReqBody; //

const { status, data } = await apiInstance.inviteChannelMember(
    inviteChannelMemberReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteChannelMemberReqBody** | **InviteChannelMemberReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupChannel**
> ChannelResponse lookupChannel()

Returns details of a channel

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let id: string; //Channel ID for the channel being queried (default to undefined)
let type: ChannelType; //Type of identifier being used to query the channel. Defaults to ID. (optional) (default to undefined)
let viewerFid: number; //FID of the user viewing the channel. (optional) (default to undefined)

const { status, data } = await apiInstance.lookupChannel(
    id,
    type,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Channel ID for the channel being queried | defaults to undefined|
| **type** | **ChannelType** | Type of identifier being used to query the channel. Defaults to ID. | (optional) defaults to undefined|
| **viewerFid** | [**number**] | FID of the user viewing the channel. | (optional) defaults to undefined|


### Return type

**ChannelResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeChannelMember**
> OperationResponse removeChannelMember(removeChannelMemberReqBody)

Remove a user from a channel or a user\'s invite to a channel role

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    RemoveChannelMemberReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let removeChannelMemberReqBody: RemoveChannelMemberReqBody; //

const { status, data } = await apiInstance.removeChannelMember(
    removeChannelMemberReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeChannelMemberReqBody** | **RemoveChannelMemberReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondChannelInvite**
> OperationResponse respondChannelInvite(respondChannelInviteReqBody)

Accept or reject a channel invite

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    RespondChannelInviteReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let respondChannelInviteReqBody: RespondChannelInviteReqBody; //

const { status, data } = await apiInstance.respondChannelInvite(
    respondChannelInviteReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondChannelInviteReqBody** | **RespondChannelInviteReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchChannels**
> ChannelSearchResponse searchChannels()

Returns a list of channels based on ID or name

### Example

```typescript
import {
    ChannelApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let q: string; //Channel ID or name for the channel being queried (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.searchChannels(
    q,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Channel ID or name for the channel being queried | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ChannelSearchResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfollowChannel**
> OperationResponse unfollowChannel(channelFollowReqBody)

Unfollow a channel

### Example

```typescript
import {
    ChannelApi,
    Configuration,
    ChannelFollowReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelApi(configuration);

let channelFollowReqBody: ChannelFollowReqBody; //

const { status, data } = await apiInstance.unfollowChannel(
    channelFollowReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelFollowReqBody** | **ChannelFollowReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

