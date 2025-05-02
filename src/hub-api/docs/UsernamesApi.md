# UsernamesApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchUsernameProofByName**](#fetchusernameproofbyname) | **GET** /v1/userNameProofByName | Proof for a username|
|[**fetchUsernameProofsByFid**](#fetchusernameproofsbyfid) | **GET** /v1/userNameProofsByFid | Proofs provided by an FID|

# **fetchUsernameProofByName**
> UserNameProof fetchUsernameProofByName()

Fetch a proof for a username.

### Example

```typescript
import {
    UsernamesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsernamesApi(configuration);

let name: string; //The Farcaster username or ENS address (default to undefined)

const { status, data } = await apiInstance.fetchUsernameProofByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The Farcaster username or ENS address | defaults to undefined|


### Return type

**UserNameProof**

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

# **fetchUsernameProofsByFid**
> UsernameProofsResponse fetchUsernameProofsByFid()

Fetch proofs provided by a user.

### Example

```typescript
import {
    UsernamesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsernamesApi(configuration);

let fid: number; //The FID being requested (default to undefined)

const { status, data } = await apiInstance.fetchUsernameProofsByFid(
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | The FID being requested | defaults to undefined|


### Return type

**UsernameProofsResponse**

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

