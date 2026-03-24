# StorageApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**buyStorage**](#buystorage) | **POST** /v2/farcaster/storage/buy/ | Buy storage|
|[**lookupUserStorageAllocations**](#lookupuserstorageallocations) | **GET** /v2/farcaster/storage/allocations/ | Allocation of user|
|[**lookupUserStorageUsage**](#lookupuserstorageusage) | **GET** /v2/farcaster/storage/usage/ | Usage of user|

# **buyStorage**
> StorageAllocationsResponse buyStorage(buyStorageReqBody)

This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. Requires x-wallet-id header.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    BuyStorageReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let buyStorageReqBody: BuyStorageReqBody; //

const { status, data } = await apiInstance.buyStorage(
    xWalletId,
    buyStorageReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **buyStorageReqBody** | **BuyStorageReqBody**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|


### Return type

**StorageAllocationsResponse**

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
|**409** | Conflict |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupUserStorageAllocations**
> StorageAllocationsResponse lookupUserStorageAllocations()

Fetches storage allocations for a given user

### Example

```typescript
import {
    StorageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let fid: number; //The unique identifier of a farcaster user or app (unsigned integer) (default to undefined)

const { status, data } = await apiInstance.lookupUserStorageAllocations(
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The unique identifier of a farcaster user or app (unsigned integer) | defaults to undefined|


### Return type

**StorageAllocationsResponse**

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

# **lookupUserStorageUsage**
> StorageUsageResponse lookupUserStorageUsage()

Fetches storage usage for a given user

### Example

```typescript
import {
    StorageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let fid: number; //The unique identifier of a farcaster user or app (unsigned integer) (default to undefined)

const { status, data } = await apiInstance.lookupUserStorageUsage(
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The unique identifier of a farcaster user or app (unsigned integer) | defaults to undefined|


### Return type

**StorageUsageResponse**

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

