# UserApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteVerification**](#deleteverification) | **DELETE** /farcaster/user/verification | Delete verification|
|[**fetchBulkUsers**](#fetchbulkusers) | **GET** /farcaster/user/bulk | By FIDs|
|[**fetchBulkUsersByEthOrSolAddress**](#fetchbulkusersbyethorsoladdress) | **GET** /farcaster/user/bulk-by-address | By Eth or Sol addresses|
|[**fetchPowerUsers**](#fetchpowerusers) | **GET** /farcaster/user/power | Power users|
|[**fetchPowerUsersLite**](#fetchpoweruserslite) | **GET** /farcaster/user/power_lite | Power user FIDs|
|[**fetchUsersByLocation**](#fetchusersbylocation) | **GET** /farcaster/user/by_location | By location|
|[**followUser**](#followuser) | **POST** /farcaster/user/follow | Follow user|
|[**getFreshAccountFID**](#getfreshaccountfid) | **GET** /farcaster/user/fid | Fetch fresh FID|
|[**lookupUserByCustodyAddress**](#lookupuserbycustodyaddress) | **GET** /farcaster/user/custody-address | By custody-address|
|[**lookupUserByUsername**](#lookupuserbyusername) | **GET** /farcaster/user/by_username | By username|
|[**lookupUsersByXUsername**](#lookupusersbyxusername) | **GET** /farcaster/user/by_x_username | By X username|
|[**publishVerification**](#publishverification) | **POST** /farcaster/user/verification | Add verification|
|[**registerAccount**](#registeraccount) | **POST** /farcaster/user | Register new account|
|[**searchUser**](#searchuser) | **GET** /farcaster/user/search | Search for Usernames|
|[**unfollowUser**](#unfollowuser) | **DELETE** /farcaster/user/follow | Unfollow user|
|[**updateUser**](#updateuser) | **PATCH** /farcaster/user | Update user profile|

# **deleteVerification**
> OperationResponse deleteVerification(removeVerificationReqBody)

Removes verification for an eth address for the user \\ (In order to delete verification `signer_uuid` must be approved) 

### Example

```typescript
import {
    UserApi,
    Configuration,
    RemoveVerificationReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let removeVerificationReqBody: RemoveVerificationReqBody; //

const { status, data } = await apiInstance.deleteVerification(
    removeVerificationReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeVerificationReqBody** | **RemoveVerificationReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchBulkUsers**
> BulkUsersResponse fetchBulkUsers()

Fetches information about multiple users based on FIDs

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let fids: string; //Comma separated list of FIDs, up to 100 at a time (default to undefined)
let viewerFid: number; // (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchBulkUsers(
    fids,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fids** | [**string**] | Comma separated list of FIDs, up to 100 at a time | defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**BulkUsersResponse**

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

# **fetchBulkUsersByEthOrSolAddress**
> BulkUsersByAddressResponse fetchBulkUsersByEthOrSolAddress()

Fetches all users based on multiple Ethereum or Solana addresses.  Each farcaster user has a custody Ethereum address and optionally verified Ethereum or Solana addresses. This endpoint returns all users that have any of the given addresses as their custody or verified Ethereum or Solana addresses.  A custody address can be associated with only 1 farcaster user at a time but a verified address can be associated with multiple users. You can pass in Ethereum and Solana addresses, comma separated, in the same request. The response will contain users associated with the given addresses.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let addresses: string; //Comma separated list of Ethereum addresses, up to 350 at a time (default to undefined)
let addressTypes: Array<BulkUserAddressType>; //Customize which address types the request should search for. This is a comma-separated string that can include the following values: \'custody_address\' and \'verified_address\'. By default api returns both. To select multiple types, use a comma-separated list of these values.  (optional) (default to undefined)
let viewerFid: number; // (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchBulkUsersByEthOrSolAddress(
    addresses,
    addressTypes,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addresses** | [**string**] | Comma separated list of Ethereum addresses, up to 350 at a time | defaults to undefined|
| **addressTypes** | **Array&lt;BulkUserAddressType&gt;** | Customize which address types the request should search for. This is a comma-separated string that can include the following values: \&#39;custody_address\&#39; and \&#39;verified_address\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values.  | (optional) defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**BulkUsersByAddressResponse**

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
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchPowerUsers**
> UsersResponse fetchPowerUsers()

Fetches power users based on Warpcast power badges. Information is updated once a day.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let viewerFid: number; // (optional) (default to undefined)
let limit: number; //Number of power users to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchPowerUsers(
    viewerFid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] | Number of power users to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UsersResponse**

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

# **fetchPowerUsersLite**
> UserPowerLiteResponse fetchPowerUsersLite()

Fetches power users and respond in a backwards compatible format to Warpcast\'s deprecated power badge endpoint.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchPowerUsersLite(
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UserPowerLiteResponse**

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
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUsersByLocation**
> UsersResponse fetchUsersByLocation()

Fetches a list of users given a location

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let latitude: number; //Latitude of the location (default to undefined)
let longitude: number; //Longitude of the location (default to undefined)
let viewerFid: number; //FID of the user viewing the feed. Providing this will return a list of users that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.fetchUsersByLocation(
    latitude,
    longitude,
    viewerFid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latitude** | [**number**] | Latitude of the location | defaults to undefined|
| **longitude** | [**number**] | Longitude of the location | defaults to undefined|
| **viewerFid** | [**number**] | FID of the user viewing the feed. Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UsersResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followUser**
> BulkFollowResponse followUser(followReqBody)

Follow a user \\ (In order to follow a user `signer_uuid` must be approved) 

### Example

```typescript
import {
    UserApi,
    Configuration,
    FollowReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let followReqBody: FollowReqBody; //

const { status, data } = await apiInstance.followUser(
    followReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **followReqBody** | **FollowReqBody**|  | |


### Return type

**BulkFollowResponse**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFreshAccountFID**
> UserFIDResponse getFreshAccountFID()

Fetches FID to [assign it to new user](https://docs.neynar.com/reference/register-account)

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.getFreshAccountFID(
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UserFIDResponse**

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

# **lookupUserByCustodyAddress**
> UserResponse lookupUserByCustodyAddress()

Lookup a user by custody-address

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let custodyAddress: string; //Custody Address associated with mnemonic (default to undefined)

const { status, data } = await apiInstance.lookupUserByCustodyAddress(
    custodyAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **custodyAddress** | [**string**] | Custody Address associated with mnemonic | defaults to undefined|


### Return type

**UserResponse**

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
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupUserByUsername**
> UserResponse lookupUserByUsername()

Fetches a single hydrated user object given a username

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let username: string; //Username of the user to fetch (default to undefined)
let viewerFid: number; // (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.lookupUserByUsername(
    username,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username of the user to fetch | defaults to undefined|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UserResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookupUsersByXUsername**
> BulkUsersResponse lookupUsersByXUsername()

Fetches the users who have verified the specified X (Twitter) username

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let xUsername: string; //X (Twitter) username to search for, without the @ symbol (default to undefined)
let viewerFid: number; //FID of the viewer for contextual information like follows and blocks (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.lookupUsersByXUsername(
    xUsername,
    viewerFid,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xUsername** | [**string**] | X (Twitter) username to search for, without the @ symbol | defaults to undefined|
| **viewerFid** | [**number**] | FID of the viewer for contextual information like follows and blocks | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**BulkUsersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Users found |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishVerification**
> OperationResponse publishVerification(addVerificationReqBody)

Adds verification for an eth address or contract for the user \\ (In order to add verification `signer_uuid` must be approved) 

### Example

```typescript
import {
    UserApi,
    Configuration,
    AddVerificationReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let addVerificationReqBody: AddVerificationReqBody; //

const { status, data } = await apiInstance.publishVerification(
    addVerificationReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addVerificationReqBody** | **AddVerificationReqBody**|  | |


### Return type

**OperationResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerAccount**
> RegisterUserResponse registerAccount(registerUserReqBody)

Register account on farcaster.  **Note:** This API must be called within 10 minutes of the fetch FID API call (i.e., /v2/farcaster/user/fid). Otherwise, Neynar will assign this FID to another available user. 

### Example

```typescript
import {
    UserApi,
    Configuration,
    RegisterUserReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let registerUserReqBody: RegisterUserReqBody; //

const { status, data } = await apiInstance.registerAccount(
    registerUserReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserReqBody** | **RegisterUserReqBody**|  | |


### Return type

**RegisterUserResponse**

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
|**401** | Unauthorized |  -  |
|**404** | Resource not found |  -  |
|**409** | Conflict |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchUser**
> UserSearchResponse searchUser()

Search for Usernames

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let q: string; // (default to undefined)
let viewerFid: number; //Providing this will return search results that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let limit: number; //Number of users to fetch (optional) (default to 5)
let cursor: string; //Pagination cursor. (optional) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)

const { status, data } = await apiInstance.searchUser(
    q,
    viewerFid,
    limit,
    cursor,
    xNeynarExperimental
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] |  | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return search results that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of users to fetch | (optional) defaults to 5|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|


### Return type

**UserSearchResponse**

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

# **unfollowUser**
> BulkFollowResponse unfollowUser(followReqBody)

Unfollow a user \\ (In order to unfollow a user `signer_uuid` must be approved) 

### Example

```typescript
import {
    UserApi,
    Configuration,
    FollowReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let followReqBody: FollowReqBody; //

const { status, data } = await apiInstance.unfollowUser(
    followReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **followReqBody** | **FollowReqBody**|  | |


### Return type

**BulkFollowResponse**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> OperationResponse updateUser(updateUserReqBody)

Update user profile \\ (In order to update user\'s profile `signer_uuid` must be approved) 

### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateUserReqBody: UpdateUserReqBody; //

const { status, data } = await apiInstance.updateUser(
    updateUserReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserReqBody** | **UpdateUserReqBody**|  | |


### Return type

**OperationResponse**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

