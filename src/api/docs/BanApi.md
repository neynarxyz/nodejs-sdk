# BanApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBans**](#deletebans) | **DELETE** /v2/farcaster/ban/ | Unban FIDs from app|
|[**fetchBanList**](#fetchbanlist) | **GET** /v2/farcaster/ban/list/ | Banned FIDs of app|
|[**publishBans**](#publishbans) | **POST** /v2/farcaster/ban/ | Ban FIDs from app|

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
|**200** | Success |  -  |
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

let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchBanList(
    xNeynarExperimental,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


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
|**200** | Success |  -  |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

