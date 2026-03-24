# SubscribersApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchSubscribedToForFid**](#fetchsubscribedtoforfid) | **GET** /v2/farcaster/user/subscribed_to/ | Subscribed to|
|[**fetchSubscribersForFid**](#fetchsubscribersforfid) | **GET** /v2/farcaster/user/subscribers/ | Subscribers of a user|
|[**fetchSubscriptionCheck**](#fetchsubscriptioncheck) | **GET** /v2/stp/subscription_check/ | Hypersub subscription check|
|[**fetchSubscriptionsForFid**](#fetchsubscriptionsforfid) | **GET** /v2/farcaster/user/subscriptions_created/ | Subscriptions created by FID|

# **fetchSubscribedToForFid**
> SubscribedToResponse fetchSubscribedToForFid()

Fetch what FIDs and contracts a FID is subscribed to.

### Example

```typescript
import {
    SubscribersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscribersApi(configuration);

let fid: number; //The unique identifier of a farcaster user or app (unsigned integer) (default to undefined)
let subscriptionProvider: 'fabric_stp'; //The provider of the subscription. (default to undefined)
let viewerFid: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.fetchSubscribedToForFid(
    fid,
    subscriptionProvider,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The unique identifier of a farcaster user or app (unsigned integer) | defaults to undefined|
| **subscriptionProvider** | [**&#39;fabric_stp&#39;**]**Array<&#39;fabric_stp&#39;>** | The provider of the subscription. | defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|


### Return type

**SubscribedToResponse**

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

# **fetchSubscribersForFid**
> SubscribersResponse fetchSubscribersForFid()

Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.

### Example

```typescript
import {
    SubscribersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscribersApi(configuration);

let fid: number; //The unique identifier of a farcaster user or app (unsigned integer) (default to undefined)
let subscriptionProvider: 'fabric_stp' | 'paragraph'; //The provider of the subscription. (default to undefined)
let viewerFid: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.fetchSubscribersForFid(
    fid,
    subscriptionProvider,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The unique identifier of a farcaster user or app (unsigned integer) | defaults to undefined|
| **subscriptionProvider** | [**&#39;fabric_stp&#39; | &#39;paragraph&#39;**]**Array<&#39;fabric_stp&#39; &#124; &#39;paragraph&#39;>** | The provider of the subscription. | defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|


### Return type

**SubscribersResponse**

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

# **fetchSubscriptionCheck**
> SubscriptionCheckResponse fetchSubscriptionCheck()

Check if a wallet address is subscribed to a given STP (Hypersub) contract.

### Example

```typescript
import {
    SubscribersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscribersApi(configuration);

let addresses: string; //Comma separated list of Ethereum addresses, up to 350 at a time (default to undefined)
let contractAddress: string; //Ethereum address of the STP contract (default to undefined)
let chainId: string; //Chain ID of the STP contract (default to undefined)

const { status, data } = await apiInstance.fetchSubscriptionCheck(
    addresses,
    contractAddress,
    chainId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addresses** | [**string**] | Comma separated list of Ethereum addresses, up to 350 at a time | defaults to undefined|
| **contractAddress** | [**string**] | Ethereum address of the STP contract | defaults to undefined|
| **chainId** | [**string**] | Chain ID of the STP contract | defaults to undefined|


### Return type

**SubscriptionCheckResponse**

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

# **fetchSubscriptionsForFid**
> SubscriptionsResponse fetchSubscriptionsForFid()

Fetch created subscriptions for a given FID\'s.

### Example

```typescript
import {
    SubscribersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SubscribersApi(configuration);

let fid: number; //The unique identifier of a farcaster user or app (unsigned integer) (default to undefined)
let subscriptionProvider: 'fabric_stp'; //The provider of the subscription. (default to undefined)

const { status, data } = await apiInstance.fetchSubscriptionsForFid(
    fid,
    subscriptionProvider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The unique identifier of a farcaster user or app (unsigned integer) | defaults to undefined|
| **subscriptionProvider** | [**&#39;fabric_stp&#39;**]**Array<&#39;fabric_stp&#39;>** | The provider of the subscription. | defaults to undefined|


### Return type

**SubscriptionsResponse**

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

