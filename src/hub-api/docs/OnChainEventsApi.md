# OnChainEventsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchUserOnChainEvents**](#fetchuseronchainevents) | **GET** /v1/onChainEventsByFid | Fetch a list of on-chain events provided by an FID|
|[**fetchUserOnChainSignersEvents**](#fetchuseronchainsignersevents) | **GET** /v1/onChainSignersByFid | Fetch a list of signers provided by an FID|
|[**lookupOnChainIdRegistryEventByAddress**](#lookuponchainidregistryeventbyaddress) | **GET** /v1/onChainIdRegistryEventByAddress | Fetch an on-chain ID Registry Event for a given Address|

# **fetchUserOnChainEvents**
> FetchUserOnChainEvents200Response fetchUserOnChainEvents()

Fetch on-chain events provided by a user.

### Example

```typescript
import {
    OnChainEventsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnChainEventsApi(configuration);

let fid: number; //The FID being requested (default to undefined)
let eventType: OnChainEventType; //The numeric or string value of the event type being requested (default to undefined)

const { status, data } = await apiInstance.fetchUserOnChainEvents(
    fid,
    eventType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID being requested | defaults to undefined|
| **eventType** | **OnChainEventType** | The numeric or string value of the event type being requested | defaults to undefined|


### Return type

**FetchUserOnChainEvents200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserOnChainSignersEvents**
> FetchUserOnChainSignersEvents200Response fetchUserOnChainSignersEvents()

**Note:** one of two different response schemas is returned based on whether the caller provides the `signer` parameter. If included, a single `OnChainEventSigner` message is returned (or a `not_found` error). If omitted, a non-paginated list of `OnChainEventSigner` messages is returned instead.

### Example

```typescript
import {
    OnChainEventsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnChainEventsApi(configuration);

let fid: number; //The FID being requested (default to undefined)
let signer: string; //The optional key of signer (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserOnChainSignersEvents(
    fid,
    signer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID being requested | defaults to undefined|
| **signer** | [**string**] | The optional key of signer | (optional) defaults to undefined|


### Return type

**FetchUserOnChainSignersEvents200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupOnChainIdRegistryEventByAddress**
> OnChainEventIdRegister lookupOnChainIdRegistryEventByAddress()

Fetch an on-chain ID Registry Event for a given Address.

### Example

```typescript
import {
    OnChainEventsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnChainEventsApi(configuration);

let address: string; //The ETH address being requested (default to undefined)

const { status, data } = await apiInstance.lookupOnChainIdRegistryEventByAddress(
    address
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **address** | [**string**] | The ETH address being requested | defaults to undefined|


### Return type

**OnChainEventIdRegister**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

