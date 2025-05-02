# OnchainApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deployFungible**](#deployfungible) | **POST** /fungible | Deploy fungible|
|[**fetchRelevantFungibleOwners**](#fetchrelevantfungibleowners) | **GET** /farcaster/fungible/owner/relevant | Relevant owners|
|[**fetchUserBalance**](#fetchuserbalance) | **GET** /farcaster/user/balance | Token balance|

# **deployFungible**
> DeployFungibleResponse deployFungible()

Creates a new token. This is an allowlisted API, reach out if you want access. 

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let owner: string; //Ethereum address of the one who is creating the token (default to undefined)
let symbol: string; //Symbol/Ticker for the token (default to undefined)
let name: string; //Name of the token (default to undefined)
let metadataMedia: File; //Media file associated with the token.  Supported formats are image/jpeg, image/gif and image/png  (optional) (default to undefined)
let metadataDescription: string; //Description of the token (optional) (default to undefined)
let metadataNsfw: string; //Indicates if the token is NSFW (Not Safe For Work).  (optional) (default to undefined)
let metadataWebsiteLink: string; //Website link related to the token (optional) (default to undefined)
let metadataTwitter: string; //Twitter profile link (optional) (default to undefined)
let metadataDiscord: string; //Discord server link (optional) (default to undefined)
let metadataTelegram: string; //Telegram link (optional) (default to undefined)
let network: string; //Network/Chain name (optional) (default to 'base')
let factory: string; //Factory name - wow -> [wow.xyz](https://wow.xyz) - clanker -> [clanker.world](https://www.clanker.world)  (optional) (default to 'wow')

const { status, data } = await apiInstance.deployFungible(
    owner,
    symbol,
    name,
    metadataMedia,
    metadataDescription,
    metadataNsfw,
    metadataWebsiteLink,
    metadataTwitter,
    metadataDiscord,
    metadataTelegram,
    network,
    factory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **owner** | [**string**] | Ethereum address of the one who is creating the token | defaults to undefined|
| **symbol** | [**string**] | Symbol/Ticker for the token | defaults to undefined|
| **name** | [**string**] | Name of the token | defaults to undefined|
| **metadataMedia** | [**File**] | Media file associated with the token.  Supported formats are image/jpeg, image/gif and image/png  | (optional) defaults to undefined|
| **metadataDescription** | [**string**] | Description of the token | (optional) defaults to undefined|
| **metadataNsfw** | [**string**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates if the token is NSFW (Not Safe For Work).  | (optional) defaults to undefined|
| **metadataWebsiteLink** | [**string**] | Website link related to the token | (optional) defaults to undefined|
| **metadataTwitter** | [**string**] | Twitter profile link | (optional) defaults to undefined|
| **metadataDiscord** | [**string**] | Discord server link | (optional) defaults to undefined|
| **metadataTelegram** | [**string**] | Telegram link | (optional) defaults to undefined|
| **network** | [**string**]**Array<&#39;base&#39;>** | Network/Chain name | (optional) defaults to 'base'|
| **factory** | [**string**]**Array<&#39;wow&#39; &#124; &#39;clanker&#39;>** | Factory name - wow -&gt; [wow.xyz](https://wow.xyz) - clanker -&gt; [clanker.world](https://www.clanker.world)  | (optional) defaults to 'wow'|


### Return type

**DeployFungibleResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRelevantFungibleOwners**
> RelevantFungibleOwnersResponse fetchRelevantFungibleOwners()

Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let contractAddress: string; //Contract address of the fungible asset (default to undefined)
let networks: Array<Networks>; //Comma separated list of networks to fetch balances for. Currently, only \"base\" is supported. (default to undefined)
let viewerFid: number; //If you provide a viewer_fid, the response will include token holders from the user\'s network, respecting their mutes and blocks and including viewer_context; if not provided, the response will show top token holders across the network—both sets can be combined to generate a longer list if desired. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRelevantFungibleOwners(
    contractAddress,
    networks,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractAddress** | [**string**] | Contract address of the fungible asset | defaults to undefined|
| **networks** | **Array&lt;Networks&gt;** | Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. | defaults to undefined|
| **viewerFid** | [**number**] | If you provide a viewer_fid, the response will include token holders from the user\&#39;s network, respecting their mutes and blocks and including viewer_context; if not provided, the response will show top token holders across the network—both sets can be combined to generate a longer list if desired. | (optional) defaults to undefined|


### Return type

**RelevantFungibleOwnersResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchUserBalance**
> BalanceResponse fetchUserBalance()

Fetches the token balances of a user given their FID

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let fid: number; //FID of the user to fetch (default to undefined)
let networks: Array<Networks>; //Comma separated list of networks to fetch balances for. Currently, only \"base\" is supported. (default to undefined)

const { status, data } = await apiInstance.fetchUserBalance(
    fid,
    networks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user to fetch | defaults to undefined|
| **networks** | **Array&lt;Networks&gt;** | Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. | defaults to undefined|


### Return type

**BalanceResponse**

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

