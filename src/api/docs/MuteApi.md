# MuteApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMute**](#deletemute) | **DELETE** /farcaster/mute | Unmute FID|
|[**fetchMuteList**](#fetchmutelist) | **GET** /farcaster/mute/list | Muted FIDs of user|
|[**publishMute**](#publishmute) | **POST** /farcaster/mute | Mute FID|

# **deleteMute**
> MuteResponse deleteMute(muteReqBody)

Deletes a mute for a given FID. This is an allowlisted API, reach out if you want access.

### Example

```typescript
import {
    MuteApi,
    Configuration,
    MuteReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new MuteApi(configuration);

let muteReqBody: MuteReqBody; //

const { status, data } = await apiInstance.deleteMute(
    muteReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **muteReqBody** | **MuteReqBody**|  | |


### Return type

**MuteResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchMuteList**
> MuteListResponse fetchMuteList()

Fetches all FIDs that a user has muted.

### Example

```typescript
import {
    MuteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MuteApi(configuration);

let fid: number; //The user\'s FID (identifier) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchMuteList(
    fid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The user\&#39;s FID (identifier) | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**MuteListResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishMute**
> MuteResponse publishMute(muteReqBody)

Adds a mute for a given FID. This is an allowlisted API, reach out if you want access.

### Example

```typescript
import {
    MuteApi,
    Configuration,
    MuteReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new MuteApi(configuration);

let muteReqBody: MuteReqBody; //

const { status, data } = await apiInstance.publishMute(
    muteReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **muteReqBody** | **MuteReqBody**|  | |


### Return type

**MuteResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

