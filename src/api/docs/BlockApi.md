# BlockApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBlock**](#deleteblock) | **DELETE** /farcaster/block | Unblock FID|
|[**fetchBlockList**](#fetchblocklist) | **GET** /farcaster/block/list | Blocked / Blocked by FIDs|
|[**publishBlock**](#publishblock) | **POST** /farcaster/block | Block FID|

# **deleteBlock**
> OperationResponse deleteBlock(blockReqBody)

Deletes a block for a given FID.

### Example

```typescript
import {
    BlockApi,
    Configuration,
    BlockReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockApi(configuration);

let blockReqBody: BlockReqBody; //

const { status, data } = await apiInstance.deleteBlock(
    blockReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockReqBody** | **BlockReqBody**|  | |


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
|**200** | successful operation |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchBlockList**
> BlockListResponse fetchBlockList()

Fetches all FIDs that a user has blocked or has been blocked by

### Example

```typescript
import {
    BlockApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockApi(configuration);

let blockerFid: number; //Providing this will return the users that this user has blocked (optional) (default to undefined)
let blockedFid: number; //Providing this will return the users that have blocked this user (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchBlockList(
    blockerFid,
    blockedFid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockerFid** | [**number**] | Providing this will return the users that this user has blocked | (optional) defaults to undefined|
| **blockedFid** | [**number**] | Providing this will return the users that have blocked this user | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**BlockListResponse**

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

# **publishBlock**
> OperationResponse publishBlock(blockReqBody)

Adds a block for a given FID.

### Example

```typescript
import {
    BlockApi,
    Configuration,
    BlockReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockApi(configuration);

let blockReqBody: BlockReqBody; //

const { status, data } = await apiInstance.publishBlock(
    blockReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockReqBody** | **BlockReqBody**|  | |


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
|**200** | successful operation |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

