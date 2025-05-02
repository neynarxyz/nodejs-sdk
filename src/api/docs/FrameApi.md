# FrameApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteNeynarFrame**](#deleteneynarframe) | **DELETE** /farcaster/frame | Delete mini app|
|[**fetchFrameCatalog**](#fetchframecatalog) | **GET** /farcaster/frame/catalog | Mini apps catalog|
|[**fetchFrameMetaTagsFromUrl**](#fetchframemetatagsfromurl) | **GET** /farcaster/frame/crawl | Meta tags from URL|
|[**fetchNeynarFrames**](#fetchneynarframes) | **GET** /farcaster/frame/list | List of mini apps|
|[**fetchNotificationTokens**](#fetchnotificationtokens) | **GET** /farcaster/frame/notification_tokens | List of mini app notification tokens |
|[**fetchRelevantFrames**](#fetchrelevantframes) | **GET** /farcaster/frame/relevant | Relevant mini apps|
|[**fetchValidateFrameAnalytics**](#fetchvalidateframeanalytics) | **GET** /farcaster/frame/validate/analytics | Analytics for the mini app|
|[**fetchValidateFrameList**](#fetchvalidateframelist) | **GET** /farcaster/frame/validate/list | All mini apps validated by user|
|[**getTransactionPayFrame**](#gettransactionpayframe) | **GET** /farcaster/frame/transaction/pay | Get transaction pay mini app|
|[**lookupNeynarFrame**](#lookupneynarframe) | **GET** /farcaster/frame | Mini app by UUID or URL|
|[**postFrameAction**](#postframeaction) | **POST** /farcaster/frame/action | Post a mini app action, cast action or a cast composer action|
|[**postFrameActionDeveloperManaged**](#postframeactiondevelopermanaged) | **POST** /farcaster/frame/developer_managed/action | Signature packet|
|[**publishFrameNotifications**](#publishframenotifications) | **POST** /farcaster/frame/notifications | Send notifications|
|[**publishNeynarFrame**](#publishneynarframe) | **POST** /farcaster/frame | Create mini app|
|[**updateNeynarFrame**](#updateneynarframe) | **PUT** /farcaster/frame | Update mini app|
|[**validateFrameAction**](#validateframeaction) | **POST** /farcaster/frame/validate | Validate mini app action|

# **deleteNeynarFrame**
> DeleteFrameResponse deleteNeynarFrame(deleteFrameReqBody)

Delete an existing mini app, if it was made by the developer (identified by API key)

### Example

```typescript
import {
    FrameApi,
    Configuration,
    DeleteFrameReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let deleteFrameReqBody: DeleteFrameReqBody; //

const { status, data } = await apiInstance.deleteNeynarFrame(
    deleteFrameReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteFrameReqBody** | **DeleteFrameReqBody**|  | |


### Return type

**DeleteFrameResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mini app deleted successfully |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
let timeWindow: TrendingTimeWindow; //Time window used to calculate the change in trending score for each mini app, used to sort mini app results (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFrameCatalog(
    limit,
    cursor,
    timeWindow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 100|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **timeWindow** | **TrendingTimeWindow** | Time window used to calculate the change in trending score for each mini app, used to sort mini app results | (optional) defaults to undefined|


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
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchFrameMetaTagsFromUrl**
> FetchFrameMetaTagsFromUrl200Response fetchFrameMetaTagsFromUrl()

Fetches the mini app meta tags from the URL

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let url: string; //The mini app URL to crawl (default to undefined)

const { status, data } = await apiInstance.fetchFrameMetaTagsFromUrl(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | The mini app URL to crawl | defaults to undefined|


### Return type

**FetchFrameMetaTagsFromUrl200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The response object containing the mini app object |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchNeynarFrames**
> Array<NeynarFrame> fetchNeynarFrames()

Fetch a list of mini apps made by the developer (identified by API key)

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

const { status, data } = await apiInstance.fetchNeynarFrames();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NeynarFrame>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of mini apps |  -  |
|**404** | Resource not found |  -  |

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
let fids: string; //Comma separated list of FIDs, up to 100 at a time (optional) (default to undefined)
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
| **fids** | [**string**] | Comma separated list of FIDs, up to 100 at a time | (optional) defaults to undefined|
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
|**200** | Successful operation. |  -  |
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
let timeWindow: TrendingTimeWindow; //Time window used to limit statistics used to calculate mini app relevance (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRelevantFrames(
    viewerFid,
    timeWindow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewerFid** | [**number**] | FID of the user to fetch relevant mini apps for | defaults to undefined|
| **timeWindow** | **TrendingTimeWindow** | Time window used to limit statistics used to calculate mini app relevance | (optional) defaults to undefined|


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
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchValidateFrameAnalytics**
> FrameValidateAnalyticsResponse fetchValidateFrameAnalytics()

Fetch analytics for total-interactors, interactors, nteractions-per-cast and input-text.

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let frameUrl: string; // (default to undefined)
let analyticsType: ValidateFrameAnalyticsType; // (default to undefined)
let start: string; // (default to 2024-04-06T06:44:56.811Z)
let stop: string; // (default to 2024-04-08T06:44:56.811Z)
let aggregateWindow: ValidateFrameAggregateWindow; //Required for `analytics_type=interactions-per-cast` (optional) (default to undefined)

const { status, data } = await apiInstance.fetchValidateFrameAnalytics(
    frameUrl,
    analyticsType,
    start,
    stop,
    aggregateWindow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **frameUrl** | [**string**] |  | defaults to undefined|
| **analyticsType** | **ValidateFrameAnalyticsType** |  | defaults to undefined|
| **start** | [**string**] |  | defaults to 2024-04-06T06:44:56.811Z|
| **stop** | [**string**] |  | defaults to 2024-04-08T06:44:56.811Z|
| **aggregateWindow** | **ValidateFrameAggregateWindow** | Required for &#x60;analytics_type&#x3D;interactions-per-cast&#x60; | (optional) defaults to undefined|


### Return type

**FrameValidateAnalyticsResponse**

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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchValidateFrameList**
> FrameValidateListResponse fetchValidateFrameList()

Fetch a list of all the mini apps validated by a user

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

const { status, data } = await apiInstance.fetchValidateFrameList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FrameValidateListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
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
|**200** | Transaction mini app details |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupNeynarFrame**
> NeynarFrame lookupNeynarFrame()

Fetch a mini app either by UUID or Neynar URL

### Example

```typescript
import {
    FrameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let type: FrameType; // (default to undefined)
let uuid: string; //UUID of the mini app to fetch (optional) (default to undefined)
let url: string; //URL of the Neynar mini app to fetch (optional) (default to undefined)

const { status, data } = await apiInstance.lookupNeynarFrame(
    type,
    uuid,
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **FrameType** |  | defaults to undefined|
| **uuid** | [**string**] | UUID of the mini app to fetch | (optional) defaults to undefined|
| **url** | [**string**] | URL of the Neynar mini app to fetch | (optional) defaults to undefined|


### Return type

**NeynarFrame**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A mini app object |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFrameAction**
> Frame postFrameAction(frameActionReqBody)

Post mini app actions, cast actions or cast composer actions to the server  \\ (In order to post any of these actions, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds for mini apps. 

### Example

```typescript
import {
    FrameApi,
    Configuration,
    FrameActionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let frameActionReqBody: FrameActionReqBody; //

const { status, data } = await apiInstance.postFrameAction(
    frameActionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **frameActionReqBody** | **FrameActionReqBody**|  | |


### Return type

**Frame**

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

# **postFrameActionDeveloperManaged**
> Frame postFrameActionDeveloperManaged(frameDeveloperManagedActionReqBody)

Post a mini app action that has been signed with a developer managed signer  The POST request to the post_url has a timeout of 5 seconds. 

### Example

```typescript
import {
    FrameApi,
    Configuration,
    FrameDeveloperManagedActionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let frameDeveloperManagedActionReqBody: FrameDeveloperManagedActionReqBody; //

const { status, data } = await apiInstance.postFrameActionDeveloperManaged(
    frameDeveloperManagedActionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **frameDeveloperManagedActionReqBody** | **FrameDeveloperManagedActionReqBody**|  | |


### Return type

**Frame**

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
|**200** | Successful operation. |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishNeynarFrame**
> NeynarFrame publishNeynarFrame(neynarFrameCreationReqBody)

Create a new mini app with a list of pages.

### Example

```typescript
import {
    FrameApi,
    Configuration,
    NeynarFrameCreationReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let neynarFrameCreationReqBody: NeynarFrameCreationReqBody; //

const { status, data } = await apiInstance.publishNeynarFrame(
    neynarFrameCreationReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **neynarFrameCreationReqBody** | **NeynarFrameCreationReqBody**|  | |


### Return type

**NeynarFrame**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mini app created successfully |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateNeynarFrame**
> NeynarFrame updateNeynarFrame(neynarFrameUpdateReqBody)

Update an existing mini app with a list of pages, if it was made by the developer (identified by API key)

### Example

```typescript
import {
    FrameApi,
    Configuration,
    NeynarFrameUpdateReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let neynarFrameUpdateReqBody: NeynarFrameUpdateReqBody; //

const { status, data } = await apiInstance.updateNeynarFrame(
    neynarFrameUpdateReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **neynarFrameUpdateReqBody** | **NeynarFrameUpdateReqBody**|  | |


### Return type

**NeynarFrame**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mini app updated successfully |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateFrameAction**
> ValidateFrameActionResponse validateFrameAction(validateFrameActionReqBody)

Validates a mini app against by an interacting user against a Farcaster Hub \\ (In order to validate a mini app, message bytes from Frame Action must be provided in hex) 

### Example

```typescript
import {
    FrameApi,
    Configuration,
    ValidateFrameActionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new FrameApi(configuration);

let validateFrameActionReqBody: ValidateFrameActionReqBody; //

const { status, data } = await apiInstance.validateFrameAction(
    validateFrameActionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateFrameActionReqBody** | **ValidateFrameActionReqBody**|  | |


### Return type

**ValidateFrameActionResponse**

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

