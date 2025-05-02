# WebhookApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /farcaster/webhook | Delete a webhook|
|[**fetchWebhooks**](#fetchwebhooks) | **GET** /farcaster/webhook/list | Associated webhooks of user|
|[**lookupWebhook**](#lookupwebhook) | **GET** /farcaster/webhook | Fetch a webhook|
|[**publishWebhook**](#publishwebhook) | **POST** /farcaster/webhook | Create a webhook|
|[**updateWebhook**](#updatewebhook) | **PUT** /farcaster/webhook | Update a webhook|
|[**updateWebhookActiveStatus**](#updatewebhookactivestatus) | **PATCH** /farcaster/webhook | Update webhook status|

# **deleteWebhook**
> WebhookResponse deleteWebhook(webhookDeleteReqBody)

Delete a webhook

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhookDeleteReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookDeleteReqBody: WebhookDeleteReqBody; //

const { status, data } = await apiInstance.deleteWebhook(
    webhookDeleteReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookDeleteReqBody** | **WebhookDeleteReqBody**|  | |


### Return type

**WebhookResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted webhook status message |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchWebhooks**
> WebhookListResponse fetchWebhooks()

Fetch a list of webhooks associated to a user

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

const { status, data } = await apiInstance.fetchWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhookListResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of webhooks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupWebhook**
> WebhookResponse lookupWebhook()

Fetch a webhook

### Example

```typescript
import {
    WebhookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.lookupWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**WebhookResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Details of a webhook |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishWebhook**
> WebhookResponse publishWebhook(webhookPostReqBody)

Create a webhook

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhookPostReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookPostReqBody: WebhookPostReqBody; //

const { status, data } = await apiInstance.publishWebhook(
    webhookPostReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookPostReqBody** | **WebhookPostReqBody**|  | |


### Return type

**WebhookResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Created webhook |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> WebhookResponse updateWebhook(webhookPutReqBody)

Update a webhook

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhookPutReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookPutReqBody: WebhookPutReqBody; //

const { status, data } = await apiInstance.updateWebhook(
    webhookPutReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookPutReqBody** | **WebhookPutReqBody**|  | |


### Return type

**WebhookResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated webhook |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhookActiveStatus**
> WebhookResponse updateWebhookActiveStatus(webhookPatchReqBody)

Update webhook active status

### Example

```typescript
import {
    WebhookApi,
    Configuration,
    WebhookPatchReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhookApi(configuration);

let webhookPatchReqBody: WebhookPatchReqBody; //

const { status, data } = await apiInstance.updateWebhookActiveStatus(
    webhookPatchReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookPatchReqBody** | **WebhookPatchReqBody**|  | |


### Return type

**WebhookResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated webhook |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

