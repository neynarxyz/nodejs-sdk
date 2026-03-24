# LoginApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchNonce**](#fetchnonce) | **GET** /v2/farcaster/login/nonce/ | Fetch nonce|

# **fetchNonce**
> NonceResponse fetchNonce()

Nonce to sign a message

### Example

```typescript
import {
    LoginApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LoginApi(configuration);

const { status, data } = await apiInstance.fetchNonce();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**NonceResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

