# PortalApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**billing**](#billing) | **GET** /portal/organization/billing | Get billing information for the current organization|
|[**upgrade**](#upgrade) | **POST** /portal/subscription/upgrade | Process subscription upgrade with credit|
|[**upgradePreview**](#upgradepreview) | **GET** /portal/subscription/upgrade/preview | Get upgrade preview with credit calculation|

# **billing**
> Billing200Response billing()


### Example

```typescript
import {
    PortalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PortalApi(configuration);

const { status, data } = await apiInstance.billing();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Billing200Response**

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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upgrade**
> Upgrade200Response upgrade(upgradeRequest)


### Example

```typescript
import {
    PortalApi,
    Configuration,
    UpgradeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PortalApi(configuration);

let upgradeRequest: UpgradeRequest; //

const { status, data } = await apiInstance.upgrade(
    upgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upgradeRequest** | **UpgradeRequest**|  | |


### Return type

**Upgrade200Response**

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
|**401** | Unauthorized |  -  |
|**402** | Payment Required |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upgradePreview**
> UpgradePreview200Response upgradePreview()


### Example

```typescript
import {
    PortalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PortalApi(configuration);

let newPlan: string; // (default to undefined)
let productCategory: 'API' | 'STUDIO'; // (optional) (default to undefined)

const { status, data } = await apiInstance.upgradePreview(
    newPlan,
    productCategory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newPlan** | [**string**] |  | defaults to undefined|
| **productCategory** | [**&#39;API&#39; | &#39;STUDIO&#39;**]**Array<&#39;API&#39; &#124; &#39;STUDIO&#39;>** |  | (optional) defaults to undefined|


### Return type

**UpgradePreview200Response**

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
|**401** | Unauthorized |  -  |
|**402** | Payment Required |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

