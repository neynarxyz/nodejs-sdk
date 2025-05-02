# SignerApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSigner**](#createsigner) | **POST** /farcaster/signer | Create signer|
|[**fetchAuthorizationUrl**](#fetchauthorizationurl) | **GET** /farcaster/login/authorize | Fetch authorization url|
|[**fetchSigners**](#fetchsigners) | **GET** /farcaster/signer/list | List signers|
|[**lookupDeveloperManagedSigner**](#lookupdevelopermanagedsigner) | **GET** /farcaster/signer/developer_managed | Status by public key|
|[**lookupSigner**](#lookupsigner) | **GET** /farcaster/signer | Status|
|[**publishMessageToFarcaster**](#publishmessagetofarcaster) | **POST** /farcaster/message | Publish message|
|[**registerSignedKey**](#registersignedkey) | **POST** /farcaster/signer/signed_key | Register Signed Key|
|[**registerSignedKeyForDeveloperManagedSigner**](#registersignedkeyfordevelopermanagedsigner) | **POST** /farcaster/signer/developer_managed/signed_key | Register Signed Key|

# **createSigner**
> Signer createSigner()

Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer. 

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

const { status, data } = await apiInstance.createSigner();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Signer**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchAuthorizationUrl**
> AuthorizationUrlResponse fetchAuthorizationUrl()

Fetch authorization url (Fetched authorized url useful for SIWN login operation)

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let clientId: string; // (default to undefined)
let responseType: AuthorizationUrlResponseType; // (default to undefined)

const { status, data } = await apiInstance.fetchAuthorizationUrl(
    clientId,
    responseType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|
| **responseType** | **AuthorizationUrlResponseType** |  | defaults to undefined|


### Return type

**AuthorizationUrlResponse**

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchSigners**
> SignerListResponse fetchSigners()

Fetches a list of signers for a custody address

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let message: string; //A Sign-In with Ethereum (SIWE) message that the user\'s Ethereum wallet signs. This message includes details such as the domain, address, statement, URI, nonce, and other relevant information following the EIP-4361 standard. It should be structured and URL-encoded.  example:  example.com wants you to sign in with your Ethereum account:\\\\n0x23A...F232\\\\n\\\\nSign in to continue.\\\\n\\\\nURI: example.com\\\\nVersion: 1\\\\nChain ID: 1\\\\nNonce: xyz123\\\\nIssued At: 2021-09-01T14:52:07Z  Note: This is just an example message (So, message is invalid, since we don\'t want any signers related to NEYNAR_API_DOCS to be exposed).   [Checkout fetch-signers API documentation for more details.](https://docs.neynar.com/docs/fetch-signers-1)  (default to undefined)
let signature: string; //The digital signature produced by signing the provided SIWE message with the user\'s Ethereum private key. This signature is used to verify the authenticity of the message and the identity of the signer.  (default to undefined)

const { status, data } = await apiInstance.fetchSigners(
    message,
    signature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **message** | [**string**] | A Sign-In with Ethereum (SIWE) message that the user\&#39;s Ethereum wallet signs. This message includes details such as the domain, address, statement, URI, nonce, and other relevant information following the EIP-4361 standard. It should be structured and URL-encoded.  example:  example.com wants you to sign in with your Ethereum account:\\\\n0x23A...F232\\\\n\\\\nSign in to continue.\\\\n\\\\nURI: example.com\\\\nVersion: 1\\\\nChain ID: 1\\\\nNonce: xyz123\\\\nIssued At: 2021-09-01T14:52:07Z  Note: This is just an example message (So, message is invalid, since we don\&#39;t want any signers related to NEYNAR_API_DOCS to be exposed).   [Checkout fetch-signers API documentation for more details.](https://docs.neynar.com/docs/fetch-signers-1)  | defaults to undefined|
| **signature** | [**string**] | The digital signature produced by signing the provided SIWE message with the user\&#39;s Ethereum private key. This signature is used to verify the authenticity of the message and the identity of the signer.  | defaults to undefined|


### Return type

**SignerListResponse**

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
|**401** | Unauthorized |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupDeveloperManagedSigner**
> DeveloperManagedSigner lookupDeveloperManagedSigner()

Fetches the status of a developer managed signer by public key

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let publicKey: string; // (default to undefined)

const { status, data } = await apiInstance.lookupDeveloperManagedSigner(
    publicKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicKey** | [**string**] |  | defaults to undefined|


### Return type

**DeveloperManagedSigner**

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

# **lookupSigner**
> Signer lookupSigner()

Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let signerUuid: string; // (default to undefined)

const { status, data } = await apiInstance.lookupSigner(
    signerUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signerUuid** | [**string**] |  | defaults to undefined|


### Return type

**Signer**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishMessageToFarcaster**
> object publishMessageToFarcaster(body)

Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.

### Example

```typescript
import {
    SignerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let body: object; //

const { status, data } = await apiInstance.publishMessageToFarcaster(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**object**

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

# **registerSignedKey**
> Signer registerSignedKey(registerSignerKeyReqBody)

Registers an app FID, deadline and a signature. Returns the signer status with an approval url.

### Example

```typescript
import {
    SignerApi,
    Configuration,
    RegisterSignerKeyReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let registerSignerKeyReqBody: RegisterSignerKeyReqBody; //

const { status, data } = await apiInstance.registerSignedKey(
    registerSignerKeyReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerSignerKeyReqBody** | **RegisterSignerKeyReqBody**|  | |


### Return type

**Signer**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerSignedKeyForDeveloperManagedSigner**
> DeveloperManagedSigner registerSignedKeyForDeveloperManagedSigner(registerDeveloperManagedSignedKeyReqBody)

Registers an signed key and returns the developer managed signer status with an approval url.

### Example

```typescript
import {
    SignerApi,
    Configuration,
    RegisterDeveloperManagedSignedKeyReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new SignerApi(configuration);

let registerDeveloperManagedSignedKeyReqBody: RegisterDeveloperManagedSignedKeyReqBody; //

const { status, data } = await apiInstance.registerSignedKeyForDeveloperManagedSigner(
    registerDeveloperManagedSignedKeyReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerDeveloperManagedSignedKeyReqBody** | **RegisterDeveloperManagedSignedKeyReqBody**|  | |


### Return type

**DeveloperManagedSigner**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

