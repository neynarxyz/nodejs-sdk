# ActionApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**publishFarcasterAction**](#publishfarcasteraction) | **POST** /farcaster/action | User actions across apps|

# **publishFarcasterAction**
> { [key: string]: any; } publishFarcasterAction(farcasterActionReqBody)

Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.

### Example

```typescript
import {
    ActionApi,
    Configuration,
    FarcasterActionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ActionApi(configuration);

let farcasterActionReqBody: FarcasterActionReqBody; //

const { status, data } = await apiInstance.publishFarcasterAction(
    farcasterActionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **farcasterActionReqBody** | **FarcasterActionReqBody**|  | |


### Return type

**{ [key: string]: any; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**0** | Any possible response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

