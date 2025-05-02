# BanApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBans**](#deletebans) | **DELETE** /farcaster/ban | Unban FIDs from app|
|[**fetchBanList**](#fetchbanlist) | **GET** /farcaster/ban/list | Banned FIDs of app|
|[**publishBans**](#publishbans) | **POST** /farcaster/ban | Ban FIDs from app|

# **deleteBans**
> BanResponse deleteBans(banReqBody)

Deletes a list of FIDs from the app associated with your API key.

### Example

```typescript
import {
    BanApi,
    Configuration,
    BanReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new BanApi(configuration);

let banReqBody: BanReqBody; //

const { status, data } = await apiInstance.deleteBans(
    banReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **banReqBody** | **BanReqBody**|  | |


### Return type

**BanResponse**

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

# **fetchBanList**
> BanListResponse fetchBanList()

Fetches all FIDs that your app has banned.

### Example

```typescript
import {
    BanApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BanApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchBanList(
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**BanListResponse**

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

# **publishBans**
> BanResponse publishBans(banReqBody)

Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.

### Example

```typescript
import {
    BanApi,
    Configuration,
    BanReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new BanApi(configuration);

let banReqBody: BanReqBody; //

const { status, data } = await apiInstance.publishBans(
    banReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **banReqBody** | **BanReqBody**|  | |


### Return type

**BanResponse**

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

