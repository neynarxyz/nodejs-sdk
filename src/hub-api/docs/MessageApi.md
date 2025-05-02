# MessageApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**publishMessage**](#publishmessage) | **POST** /v1/submitMessage | Submit signed message|
|[**validateMessage**](#validatemessage) | **POST** /v1/validateMessage | Validate signed message|

# **publishMessage**
> Message publishMessage(body)

Submit a message to the Farcaster network.

### Example

```typescript
import {
    MessageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessageApi(configuration);

let body: File; //A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity. 

const { status, data } = await apiInstance.publishMessage(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**| A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  | |


### Return type

**Message**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateMessage**
> ValidateMessageResponse validateMessage(body)

Validate a message on the Farcaster network.

### Example

```typescript
import {
    MessageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessageApi(configuration);

let body: File; //A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity. 

const { status, data } = await apiInstance.validateMessage(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**| A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  | |


### Return type

**ValidateMessageResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

