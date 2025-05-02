# NotificationsApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAllNotifications**](#fetchallnotifications) | **GET** /farcaster/notifications | For user|
|[**fetchChannelNotificationsForUser**](#fetchchannelnotificationsforuser) | **GET** /farcaster/notifications/channel | For user by channel|
|[**fetchNotificationsByParentUrlForUser**](#fetchnotificationsbyparenturlforuser) | **GET** /farcaster/notifications/parent_url | For user by parent_urls|
|[**markNotificationsAsSeen**](#marknotificationsasseen) | **POST** /farcaster/notifications/seen | Mark as seen|

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
let type: Array<NotificationType>; //Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. (optional) (default to undefined)
let priorityMode: boolean; //When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchAllNotifications(
    fid,
    type,
    priorityMode,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **type** | **Array&lt;NotificationType&gt;** | Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. | (optional) defaults to undefined|
| **priorityMode** | [**boolean**] | When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). | (optional) defaults to false|
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
|**200** | Successful response |  -  |
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
let priorityMode: boolean; //When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchChannelNotificationsForUser(
    fid,
    channelIds,
    priorityMode,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **channelIds** | [**string**] | Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels) | defaults to undefined|
| **priorityMode** | [**boolean**] | When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). | (optional) defaults to false|
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
|**200** | Successful response |  -  |
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
let priorityMode: boolean; //When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 15)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchNotificationsByParentUrlForUser(
    fid,
    parentUrls,
    priorityMode,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. | defaults to undefined|
| **parentUrls** | [**string**] | Comma separated parent_urls | defaults to undefined|
| **priorityMode** | [**boolean**] | When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). | (optional) defaults to false|
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
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markNotificationsAsSeen**
> OperationResponse markNotificationsAsSeen(markNotificationsAsSeenReqBody)

Mark notifications as seen

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

const { status, data } = await apiInstance.markNotificationsAsSeen(
    markNotificationsAsSeenReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markNotificationsAsSeenReqBody** | **MarkNotificationsAsSeenReqBody**|  | |


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

