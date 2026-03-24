# AppHostApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appHostGetEvent**](#apphostgetevent) | **GET** /v2/farcaster/app_host/user/event/ | Generate event|
|[**appHostGetUserState**](#apphostgetuserstate) | **GET** /v2/farcaster/app_host/user/state/ | Enabled notifications|
|[**appHostPostEvent**](#apphostpostevent) | **POST** /v2/farcaster/app_host/user/event/ | Send event|

# **appHostGetEvent**
> AppHostGetEventResponse appHostGetEvent()

Returns event object for app host events. Used if the app host intends to sign the event message instead of using Neynar-hosted signers.

### Example

```typescript
import {
    AppHostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppHostApi(configuration);

let appDomain: string; //The domain of the mini app (default to undefined)
let fid: number; //The FID of the user who initiated the event (default to undefined)
let event: 'frame_added' | 'frame_removed' | 'notifications_enabled' | 'notifications_disabled'; //The type of event (default to undefined)

const { status, data } = await apiInstance.appHostGetEvent(
    appDomain,
    fid,
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appDomain** | [**string**] | The domain of the mini app | defaults to undefined|
| **fid** | [**number**] | The FID of the user who initiated the event | defaults to undefined|
| **event** | [**&#39;frame_added&#39; | &#39;frame_removed&#39; | &#39;notifications_enabled&#39; | &#39;notifications_disabled&#39;**]**Array<&#39;frame_added&#39; &#124; &#39;frame_removed&#39; &#124; &#39;notifications_enabled&#39; &#124; &#39;notifications_disabled&#39;>** | The type of event | defaults to undefined|


### Return type

**AppHostGetEventResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appHostGetUserState**
> AppHostUserStateResponse appHostGetUserState()

Returns the current notification state for a specific user across all mini app domains in this app host. Shows which domains have notifications enabled.

### Example

```typescript
import {
    AppHostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppHostApi(configuration);

let fid: number; //The FID of the user (default to undefined)

const { status, data } = await apiInstance.appHostGetUserState(
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID of the user | defaults to undefined|


### Return type

**AppHostUserStateResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appHostPostEvent**
> AppHostPostEventResponse appHostPostEvent(appHostPostEventReqBody)

Post an app_host event to the domain\'s webhook. Events such as enabling or disabling notifications for a user. Provide either a signed message or the signer UUID of an authorized neynar-hosted signers.

### Example

```typescript
import {
    AppHostApi,
    Configuration,
    AppHostPostEventReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AppHostApi(configuration);

let appHostPostEventReqBody: AppHostPostEventReqBody; //

const { status, data } = await apiInstance.appHostPostEvent(
    appHostPostEventReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appHostPostEventReqBody** | **AppHostPostEventReqBody**|  | |


### Return type

**AppHostPostEventResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |
|**502** | 502 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

