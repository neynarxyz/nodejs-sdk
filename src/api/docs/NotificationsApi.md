# NotificationsApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAllNotifications**](#fetchallnotifications) | **GET** /v2/farcaster/notifications/ | For user|
|[**fetchChannelNotificationsForUser**](#fetchchannelnotificationsforuser) | **GET** /v2/farcaster/notifications/channel/ | For user by channel|
|[**fetchNotificationsByParentUrlForUser**](#fetchnotificationsbyparenturlforuser) | **GET** /v2/farcaster/notifications/parent_url/ | For user by parent_urls|
|[**markNotificationsAsSeen**](#marknotificationsasseen) | **POST** /v2/farcaster/notifications/seen/ | Mark as seen|

# **fetchAllNotifications**
> NotificationsResponse fetchAllNotifications()

Returns a list of notifications for a specific FID.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let fid: number; //FID of the user you you want to fetch notifications for. The response will respect this user\'s mutes and blocks. (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let type: Array<'follows' | 'recasts' | 'likes' | 'mentions' | 'replies' | 'quotes'>; //Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchAllNotifications(
    fid,
    xNeynarExperimental,
    type,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **type** | **Array<&#39;follows&#39; &#124; &#39;recasts&#39; &#124; &#39;likes&#39; &#124; &#39;mentions&#39; &#124; &#39;replies&#39; &#124; &#39;quotes&#39;>** | Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 15|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**NotificationsResponse**

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

# **fetchChannelNotificationsForUser**
> NotificationsResponse fetchChannelNotificationsForUser()

Returns a list of notifications for a user in specific channels

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let fid: number; //FID of the user you you want to fetch notifications for. The response will respect this user\'s mutes and blocks. (default to undefined)
let channelIds: string; //Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchChannelNotificationsForUser(
    fid,
    channelIds,
    xNeynarExperimental,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **channelIds** | [**string**] | Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels) | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 15|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**NotificationsResponse**

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

# **fetchNotificationsByParentUrlForUser**
> NotificationsResponse fetchNotificationsByParentUrlForUser()

Returns a list of notifications for a user in specific parent_urls

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let fid: number; //FID of the user you you want to fetch notifications for. The response will respect this user\'s mutes and blocks. (default to undefined)
let parentUrls: string; //Comma separated parent_urls (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchNotificationsByParentUrlForUser(
    fid,
    parentUrls,
    xNeynarExperimental,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **parentUrls** | [**string**] | Comma separated parent_urls | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 15|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**NotificationsResponse**

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

# **markNotificationsAsSeen**
> OperationResponse markNotificationsAsSeen(markNotificationsAsSeenReqBody)

Mark notifications as seen. You can choose one of two authorization methods, either:   1. Provide a valid signer_uuid in the request body (Most common)   2. Provide a valid, signed \"Bearer\" token in the request\'s `Authorization` header similar to the      approach described [here](https://docs.farcaster.xyz/reference/warpcast/api#authentication)

### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    MarkNotificationsAsSeenReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody; //
let authorization: string; //Optional Bearer token for certain endpoints. The token format is described [here](https://docs.farcaster.xyz/reference/warpcast/api#authentication). (optional) (default to undefined)

const { status, data } = await apiInstance.markNotificationsAsSeen(
    markNotificationsAsSeenReqBody,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markNotificationsAsSeenReqBody** | **MarkNotificationsAsSeenReqBody**|  | |
| **authorization** | [**string**] | Optional Bearer token for certain endpoints. The token format is described [here](https://docs.farcaster.xyz/reference/warpcast/api#authentication). | (optional) defaults to undefined|


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

