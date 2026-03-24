# AuthAddressApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**lookupDeveloperManagedAuthAddress**](#lookupdevelopermanagedauthaddress) | **GET** /v2/farcaster/auth_address/developer_managed/ | Status by auth address|
|[**registerSignedKeyForDeveloperManagedAuthAddress**](#registersignedkeyfordevelopermanagedauthaddress) | **POST** /v2/farcaster/auth_address/developer_managed/signed_key/ | Register Signed Key|

# **lookupDeveloperManagedAuthAddress**
> RegisterSignedKeyForDeveloperManagedAuthAddress200Response lookupDeveloperManagedAuthAddress()

Fetches the status of a developer managed auth address by auth address

### Example

```typescript
import {
    AuthAddressApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAddressApi(configuration);

let address: string; //Ethereum address (default to undefined)

const { status, data } = await apiInstance.lookupDeveloperManagedAuthAddress(
    address
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **address** | [**string**] | Ethereum address | defaults to undefined|


### Return type

**RegisterSignedKeyForDeveloperManagedAuthAddress200Response**

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

# **registerSignedKeyForDeveloperManagedAuthAddress**
> RegisterSignedKeyForDeveloperManagedAuthAddress200Response registerSignedKeyForDeveloperManagedAuthAddress(registerAuthAddressDeveloperManagedSignedKeyReqBody)

Allow apps to register an Ethereum addresses as authorized \"auth addresses\" for a user\'s Farcaster account, enabling seamless Sign-In With Farcaster (SIWF) across applications without repeated custody wallet authorizations.

### Example

```typescript
import {
    AuthAddressApi,
    Configuration,
    RegisterAuthAddressDeveloperManagedSignedKeyReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAddressApi(configuration);

let registerAuthAddressDeveloperManagedSignedKeyReqBody: RegisterAuthAddressDeveloperManagedSignedKeyReqBody; //

const { status, data } = await apiInstance.registerSignedKeyForDeveloperManagedAuthAddress(
    registerAuthAddressDeveloperManagedSignedKeyReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerAuthAddressDeveloperManagedSignedKeyReqBody** | **RegisterAuthAddressDeveloperManagedSignedKeyReqBody**|  | |


### Return type

**RegisterSignedKeyForDeveloperManagedAuthAddress200Response**

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

