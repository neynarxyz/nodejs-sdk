# FrameApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchFrameCatalog**](#fetchframecatalog) | **GET** /v2/farcaster/frame/catalog/ | Mini apps catalog|
|[**fetchNotificationTokens**](#fetchnotificationtokens) | **GET** /v2/farcaster/frame/notification_tokens/ | List of mini app notification tokens|
|[**fetchRelevantFrames**](#fetchrelevantframes) | **GET** /v2/farcaster/frame/relevant/ | Relevant mini apps|
|[**getNotificationCampaignStats**](#getnotificationcampaignstats) | **GET** /v2/farcaster/frame/notifications/ | Get notification campaign stats|
|[**getTransactionPayFrame**](#gettransactionpayframe) | **GET** /v2/farcaster/frame/transaction/pay/ | Get transaction pay mini app|
|[**publishFrameNotifications**](#publishframenotifications) | **POST** /v2/farcaster/frame/notifications/ | Send notifications|
|[**searchFrames**](#searchframes) | **GET** /v2/farcaster/frame/search/ | Search mini apps|

# **fetchFrameCatalog**
> FrameCatalogResponse fetchFrameCatalog()

A curated list of featured mini apps

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 100)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let timeWindow: '1h' | '6h' | '12h' | '24h' | '7d'; //Time window used to calculate the change in trending score for each mini app, used to sort mini app results (optional) (default to '7d')
let categories: Array<'games' | 'social' | 'finance' | 'utility' | 'productivity' | 'health-fitness' | 'news-media' | 'music' | 'shopping' | 'education' | 'developer-tools' | 'entertainment' | 'art-creativity'>; //Comma separated list of categories to include in the results. Includes all if left blank. Example: categories=games,social OR categories=games&categories=social (optional) (default to undefined)
let networks: Array<'ethereum' | 'base' | 'arbitrum' | 'arbitrum-sepolia' | 'base-sepolia' | 'degen' | 'gnosis' | 'optimism' | 'optimism-sepolia' | 'polygon' | 'ethereum-sepolia' | 'zora' | 'unichain' | 'monad-testnet' | 'celo' | 'solana'>; //List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFrameCatalog(
    limit,
    cursor,
    timeWindow,
    categories,
    networks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 100|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **timeWindow** | [**&#39;1h&#39; | &#39;6h&#39; | &#39;12h&#39; | &#39;24h&#39; | &#39;7d&#39;**]**Array<&#39;1h&#39; &#124; &#39;6h&#39; &#124; &#39;12h&#39; &#124; &#39;24h&#39; &#124; &#39;7d&#39;>** | Time window used to calculate the change in trending score for each mini app, used to sort mini app results | (optional) defaults to '7d'|
| **categories** | **Array<&#39;games&#39; &#124; &#39;social&#39; &#124; &#39;finance&#39; &#124; &#39;utility&#39; &#124; &#39;productivity&#39; &#124; &#39;health-fitness&#39; &#124; &#39;news-media&#39; &#124; &#39;music&#39; &#124; &#39;shopping&#39; &#124; &#39;education&#39; &#124; &#39;developer-tools&#39; &#124; &#39;entertainment&#39; &#124; &#39;art-creativity&#39;>** | Comma separated list of categories to include in the results. Includes all if left blank. Example: categories&#x3D;games,social OR categories&#x3D;games&amp;categories&#x3D;social | (optional) defaults to undefined|
| **networks** | **Array<&#39;ethereum&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39; &#124; &#39;arbitrum-sepolia&#39; &#124; &#39;base-sepolia&#39; &#124; &#39;degen&#39; &#124; &#39;gnosis&#39; &#124; &#39;optimism&#39; &#124; &#39;optimism-sepolia&#39; &#124; &#39;polygon&#39; &#124; &#39;ethereum-sepolia&#39; &#124; &#39;zora&#39; &#124; &#39;unichain&#39; &#124; &#39;monad-testnet&#39; &#124; &#39;celo&#39; &#124; &#39;solana&#39;>** | List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. | (optional) defaults to undefined|


### Return type

**FrameCatalogResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchNotificationTokens**
> FrameNotificationTokens fetchNotificationTokens()

Returns a list of notifications tokens related to a mini app

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let limit: number; //Number of results to fetch (optional) (default to 20)
let fids: string; //Comma separated list of FIDs, up to 100 at a time. If you pass in FIDs, you will get back the notification tokens for those FIDs. If you don\'t pass in FIDs, you will get back all the notification tokens for the mini app. (optional) (default to undefined)
let cursor: string; //Pagination cursor (optional) (default to undefined)

const { status, data } = await apiInstance.fetchNotificationTokens(
    limit,
    fids,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **fids** | [**string**] | Comma separated list of FIDs, up to 100 at a time. If you pass in FIDs, you will get back the notification tokens for those FIDs. If you don\&#39;t pass in FIDs, you will get back all the notification tokens for the mini app. | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|


### Return type

**FrameNotificationTokens**

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

# **fetchRelevantFrames**
> FetchRelevantFrames200Response fetchRelevantFrames()

Fetch a list of mini apps relevant to the user based on casts by users with strong affinity score for the user

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let viewerFid: number; //FID of the user to fetch relevant mini apps for (default to undefined)
let timeWindow: '1h' | '6h' | '12h' | '24h' | '7d'; //Time window used to limit statistics used to calculate mini app relevance (optional) (default to '7d')
let networks: Array<'ethereum' | 'base' | 'arbitrum' | 'arbitrum-sepolia' | 'base-sepolia' | 'degen' | 'gnosis' | 'optimism' | 'optimism-sepolia' | 'polygon' | 'ethereum-sepolia' | 'zora' | 'unichain' | 'monad-testnet' | 'celo' | 'solana'>; //List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRelevantFrames(
    viewerFid,
    timeWindow,
    networks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewerFid** | [**number**] | FID of the user to fetch relevant mini apps for | defaults to undefined|
| **timeWindow** | [**&#39;1h&#39; | &#39;6h&#39; | &#39;12h&#39; | &#39;24h&#39; | &#39;7d&#39;**]**Array<&#39;1h&#39; &#124; &#39;6h&#39; &#124; &#39;12h&#39; &#124; &#39;24h&#39; &#124; &#39;7d&#39;>** | Time window used to limit statistics used to calculate mini app relevance | (optional) defaults to '7d'|
| **networks** | **Array<&#39;ethereum&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39; &#124; &#39;arbitrum-sepolia&#39; &#124; &#39;base-sepolia&#39; &#124; &#39;degen&#39; &#124; &#39;gnosis&#39; &#124; &#39;optimism&#39; &#124; &#39;optimism-sepolia&#39; &#124; &#39;polygon&#39; &#124; &#39;ethereum-sepolia&#39; &#124; &#39;zora&#39; &#124; &#39;unichain&#39; &#124; &#39;monad-testnet&#39; &#124; &#39;celo&#39; &#124; &#39;solana&#39;>** | List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. | (optional) defaults to undefined|


### Return type

**FetchRelevantFrames200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNotificationCampaignStats**
> GetNotificationCampaignStats200Response getNotificationCampaignStats()

Retrieve notification delivery and opened stats for notification campaigns

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let campaignId: string; //An ID of a specific notification campaign to query (optional) (default to undefined)
let limit: number; //The number of results to return (optional) (default to 100)
let cursor: string; //Pagination cursor (optional) (default to undefined)

const { status, data } = await apiInstance.getNotificationCampaignStats(
    campaignId,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**string**] | An ID of a specific notification campaign to query | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results to return | (optional) defaults to 100|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|


### Return type

**GetNotificationCampaignStats200Response**

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
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionPayFrame**
> TransactionFrameResponse getTransactionPayFrame()

Retrieves details about a transaction pay mini app by ID

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let id: string; //ID of the transaction mini app to retrieve (default to undefined)

const { status, data } = await apiInstance.getTransactionPayFrame(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the transaction mini app to retrieve | defaults to undefined|


### Return type

**TransactionFrameResponse**

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

# **publishFrameNotifications**
> SendFrameNotificationsResponse publishFrameNotifications(sendFrameNotificationsReqBody)

Send notifications to interactors of a mini app

### Example

```typescript
import {
    FrameApi,
    Configuration,
    SendFrameNotificationsReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let sendFrameNotificationsReqBody: SendFrameNotificationsReqBody; //

const { status, data } = await apiInstance.publishFrameNotifications(
    sendFrameNotificationsReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendFrameNotificationsReqBody** | **SendFrameNotificationsReqBody**|  | |


### Return type

**SendFrameNotificationsResponse**

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

# **searchFrames**
> FrameCatalogResponse searchFrames()

Search for mini apps based on a query string

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let q: string; //Query string to search for mini apps (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let networks: Array<'ethereum' | 'base' | 'arbitrum' | 'arbitrum-sepolia' | 'base-sepolia' | 'degen' | 'gnosis' | 'optimism' | 'optimism-sepolia' | 'polygon' | 'ethereum-sepolia' | 'zora' | 'unichain' | 'monad-testnet' | 'celo' | 'solana'>; //List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. (optional) (default to undefined)

const { status, data } = await apiInstance.searchFrames(
    q,
    limit,
    cursor,
    networks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query string to search for mini apps | defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **networks** | **Array<&#39;ethereum&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39; &#124; &#39;arbitrum-sepolia&#39; &#124; &#39;base-sepolia&#39; &#124; &#39;degen&#39; &#124; &#39;gnosis&#39; &#124; &#39;optimism&#39; &#124; &#39;optimism-sepolia&#39; &#124; &#39;polygon&#39; &#124; &#39;ethereum-sepolia&#39; &#124; &#39;zora&#39; &#124; &#39;unichain&#39; &#124; &#39;monad-testnet&#39; &#124; &#39;celo&#39; &#124; &#39;solana&#39;>** | List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array. | (optional) defaults to undefined|


### Return type

**FrameCatalogResponse**

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

