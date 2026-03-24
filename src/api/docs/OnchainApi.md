# OnchainApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**batchGetTokenMetadata**](#batchgettokenmetadata) | **GET** /v2/onchain/token/metadata/batch | Batch get token metadata|
|[**createX402Signature**](#createx402signature) | **POST** /v2/signature/x402/ | Create x402 signature|
|[**deployErc721**](#deployerc721) | **POST** /v2/farcaster/nft/deploy/erc721/ | Deploy ERC-721 collection|
|[**deployFungible**](#deployfungible) | **POST** /v2/fungible/ | Deploy fungible|
|[**fetchFungibleTrades**](#fetchfungibletrades) | **GET** /v2/farcaster/fungible/trades/ | Get fungible trades|
|[**fetchFungibles**](#fetchfungibles) | **GET** /v2/farcaster/fungibles/ | Fetch fungibles|
|[**fetchRelevantFungibleOwners**](#fetchrelevantfungibleowners) | **GET** /v2/farcaster/fungible/owner/relevant/ | Relevant owners|
|[**fetchTrendingFungibles**](#fetchtrendingfungibles) | **GET** /v2/farcaster/fungible/trending/ | Trending fungibles|
|[**fetchUserBalance**](#fetchuserbalance) | **GET** /v2/farcaster/user/balance/ | Token balance|
|[**getTokenMetadata**](#gettokenmetadata) | **GET** /v2/onchain/token/metadata | Get token metadata|
|[**getWalletBalances**](#getwalletbalances) | **GET** /v2/onchain/token/balances | Get wallet token balances|
|[**mintNft**](#mintnft) | **POST** /v2/farcaster/nft/mint/ | Mint NFT(s)|
|[**registerAccountOnchain**](#registeraccountonchain) | **POST** /v2/farcaster/user/register/ | Register Farcaster account onchain|
|[**sendFungiblesToUsers**](#sendfungiblestousers) | **POST** /v2/farcaster/fungible/send/ | Send fungibles|
|[**simulateNftMint**](#simulatenftmint) | **GET** /v2/farcaster/nft/mint/ | Simulate NFT mint calldata|

# **batchGetTokenMetadata**
> BatchGetTokenMetadata200Response batchGetTokenMetadata()

Fetch metadata for multiple tokens in a single request. Provide comma-separated networks and addresses in the same order. Maximum 100 tokens per request.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let networks: string; //Comma-separated list of blockchain networks. Each value must be a valid network (ethereum, optimism, base, arbitrum). (default to undefined)
let addresses: string; //Comma-separated list of token contract addresses corresponding to each network (default to undefined)

const { status, data } = await apiInstance.batchGetTokenMetadata(
    networks,
    addresses
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **networks** | [**string**] | Comma-separated list of blockchain networks. Each value must be a valid network (ethereum, optimism, base, arbitrum). | defaults to undefined|
| **addresses** | [**string**] | Comma-separated list of token contract addresses corresponding to each network | defaults to undefined|


### Return type

**BatchGetTokenMetadata200Response**

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

# **createX402Signature**
> CreateX402Signature200Response createX402Signature(createX402SignatureRequest)

Create a signature for a given x402 resource using the specified wallet.

### Example

```typescript
import {
    OnchainApi,
    Configuration,
    CreateX402SignatureRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let xApiKey: string; // (default to undefined)
let createX402SignatureRequest: CreateX402SignatureRequest; //

const { status, data } = await apiInstance.createX402Signature(
    xWalletId,
    xApiKey,
    createX402SignatureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createX402SignatureRequest** | **CreateX402SignatureRequest**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|
| **xApiKey** | [**string**] |  | defaults to undefined|


### Return type

**CreateX402Signature200Response**

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
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployErc721**
> DeployErc721201Response deployErc721(deployErc721Request)

Deploy a new ERC-721A (series) NFT collection.

### Example

```typescript
import {
    OnchainApi,
    Configuration,
    DeployErc721Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let deployErc721Request: DeployErc721Request; //

const { status, data } = await apiInstance.deployErc721(
    xWalletId,
    deployErc721Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deployErc721Request** | **DeployErc721Request**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|


### Return type

**DeployErc721201Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
let metadataMedia: File; //Media file associated with the token.  Supported formats are image/jpeg, image/gif and image/png (optional) (default to undefined)
let metadataDescription: string; //Description of the token (optional) (default to undefined)
let metadataNsfw: string; //Indicates if the token is NSFW (Not Safe For Work). (optional) (default to undefined)
let metadataWebsiteLink: string; //Website link related to the token (optional) (default to undefined)
let metadataTwitter: string; //Twitter profile link (optional) (default to undefined)
let metadataDiscord: string; //Discord server link (optional) (default to undefined)
let metadataTelegram: string; //Telegram link (optional) (default to undefined)
let network: string; //Network/Chain name (optional) (default to 'base')
let factory: string; //Factory name - wow -> [wow.xyz](https://wow.xyz) - clanker -> [clanker.world](https://www.clanker.world) (optional) (default to 'wow')

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
| **metadataMedia** | [**File**] | Media file associated with the token.  Supported formats are image/jpeg, image/gif and image/png | (optional) defaults to undefined|
| **metadataDescription** | [**string**] | Description of the token | (optional) defaults to undefined|
| **metadataNsfw** | [**string**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates if the token is NSFW (Not Safe For Work). | (optional) defaults to undefined|
| **metadataWebsiteLink** | [**string**] | Website link related to the token | (optional) defaults to undefined|
| **metadataTwitter** | [**string**] | Twitter profile link | (optional) defaults to undefined|
| **metadataDiscord** | [**string**] | Discord server link | (optional) defaults to undefined|
| **metadataTelegram** | [**string**] | Telegram link | (optional) defaults to undefined|
| **network** | [**string**]**Array<&#39;base&#39;>** | Network/Chain name | (optional) defaults to 'base'|
| **factory** | [**string**]**Array<&#39;wow&#39; &#124; &#39;clanker&#39;>** | Factory name - wow -&gt; [wow.xyz](https://wow.xyz) - clanker -&gt; [clanker.world](https://www.clanker.world) | (optional) defaults to 'wow'|


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchFungibleTrades**
> FetchFungibleTrades200Response fetchFungibleTrades()

Get recent trades for a specific fungible within a timeframe. Returns trades ordered by timestamp (most recent first).

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let network: 'base'; // (default to undefined)
let address: string; //Contract address (default to undefined)
let timeWindow: '1h' | '6h' | '12h' | '24h' | '7d'; //Time window for trades e.g. \"1h\", \"6h\", \"12h\", \"24h\", \"7d\" (optional) (default to '24h')
let minAmountUsd: number; //Minimum USD amount to filter trades (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFungibleTrades(
    network,
    address,
    timeWindow,
    minAmountUsd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | [**&#39;base&#39;**]**Array<&#39;base&#39;>** |  | defaults to undefined|
| **address** | [**string**] | Contract address | defaults to undefined|
| **timeWindow** | [**&#39;1h&#39; | &#39;6h&#39; | &#39;12h&#39; | &#39;24h&#39; | &#39;7d&#39;**]**Array<&#39;1h&#39; &#124; &#39;6h&#39; &#124; &#39;12h&#39; &#124; &#39;24h&#39; &#124; &#39;7d&#39;>** | Time window for trades e.g. \&quot;1h\&quot;, \&quot;6h\&quot;, \&quot;12h\&quot;, \&quot;24h\&quot;, \&quot;7d\&quot; | (optional) defaults to '24h'|
| **minAmountUsd** | [**number**] | Minimum USD amount to filter trades | (optional) defaults to undefined|


### Return type

**FetchFungibleTrades200Response**

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

# **fetchFungibles**
> FungiblesResponseSchema fetchFungibles()

Fetch details for fungible assets identified by fungible identifiers.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let fungibles: string; //Comma-separated fungible identifiers (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //Optional FID of the viewer to personalize cast count filtering (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFungibles(
    fungibles,
    xNeynarExperimental,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fungibles** | [**string**] | Comma-separated fungible identifiers | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | Optional FID of the viewer to personalize cast count filtering | (optional) defaults to undefined|


### Return type

**FungiblesResponseSchema**

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

# **fetchRelevantFungibleOwners**
> RelevantFungibleOwnersResponse fetchRelevantFungibleOwners()

Fetch a list of relevant owners for a on chain asset. If a viewer is provided, only relevant holders will be shown. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let contractAddress: string; //Contract address of the fungible asset (Ethereum or Solana) (default to undefined)
let network: 'ethereum' | 'optimism' | 'base' | 'arbitrum' | 'solana'; //Network of the fungible asset. (default to undefined)
let viewerFid: number; //If you provide a viewer_fid, the response will include token holders from the user\'s network, respecting their mutes and blocks and including viewer_context; if not provided, the response will show top token holders across the network—both sets can be combined to generate a longer list if desired. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRelevantFungibleOwners(
    contractAddress,
    network,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractAddress** | [**string**] | Contract address of the fungible asset (Ethereum or Solana) | defaults to undefined|
| **network** | [**&#39;ethereum&#39; | &#39;optimism&#39; | &#39;base&#39; | &#39;arbitrum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;optimism&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39; &#124; &#39;solana&#39;>** | Network of the fungible asset. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchTrendingFungibles**
> FetchTrendingFungibles200Response fetchTrendingFungibles()

Fetch trending fungibles based on buy activity from watched addresses. Returns fungibles ranked by USD buy volume and buy count within the specified time window.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let network: 'base'; // (default to undefined)
let timeWindow: '1h' | '6h' | '12h' | '24h' | '7d'; //Time window for trending calculations e.g. \"1h\", \"6h\", \"12h\", \"24h\", \"7d\" (optional) (default to '24h')

const { status, data } = await apiInstance.fetchTrendingFungibles(
    network,
    timeWindow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | [**&#39;base&#39;**]**Array<&#39;base&#39;>** |  | defaults to undefined|
| **timeWindow** | [**&#39;1h&#39; | &#39;6h&#39; | &#39;12h&#39; | &#39;24h&#39; | &#39;7d&#39;**]**Array<&#39;1h&#39; &#124; &#39;6h&#39; &#124; &#39;12h&#39; &#124; &#39;24h&#39; &#124; &#39;7d&#39;>** | Time window for trending calculations e.g. \&quot;1h\&quot;, \&quot;6h\&quot;, \&quot;12h\&quot;, \&quot;24h\&quot;, \&quot;7d\&quot; | (optional) defaults to '24h'|


### Return type

**FetchTrendingFungibles200Response**

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
let networks: Array<'ethereum' | 'optimism' | 'base' | 'arbitrum'>; //Comma separated list of networks to fetch balances for (default to undefined)

const { status, data } = await apiInstance.fetchUserBalance(
    fid,
    networks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | FID of the user to fetch | defaults to undefined|
| **networks** | **Array<&#39;ethereum&#39; &#124; &#39;optimism&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39;>** | Comma separated list of networks to fetch balances for | defaults to undefined|


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTokenMetadata**
> GetTokenMetadata200Response getTokenMetadata()

Fetch metadata for a specific token including price, market data, and basic information. Data is fetched from onchain-indexer with fallback to third-party providers.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let network: 'ethereum' | 'optimism' | 'base' | 'arbitrum'; //A blockchain network e.g. \"ethereum\", \"optimism\", \"base\", \"arbitrum\" (default to undefined)
let address: string; //Ethereum address (default to undefined)

const { status, data } = await apiInstance.getTokenMetadata(
    network,
    address
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | [**&#39;ethereum&#39; | &#39;optimism&#39; | &#39;base&#39; | &#39;arbitrum&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;optimism&#39; &#124; &#39;base&#39; &#124; &#39;arbitrum&#39;>** | A blockchain network e.g. \&quot;ethereum\&quot;, \&quot;optimism\&quot;, \&quot;base\&quot;, \&quot;arbitrum\&quot; | defaults to undefined|
| **address** | [**string**] | Ethereum address | defaults to undefined|


### Return type

**GetTokenMetadata200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletBalances**
> GetWalletBalances200Response getWalletBalances()

Fetch all token balances for a wallet address across multiple networks. Results are paginated.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let networks: string; //Comma-separated list of networks to query. Each value must be a valid network (ethereum, optimism, base, arbitrum). (default to undefined)
let address: string; //Ethereum address (default to undefined)
let limit: number; //Number of results to return (max 100) (optional) (default to 50)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.getWalletBalances(
    networks,
    address,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **networks** | [**string**] | Comma-separated list of networks to query. Each value must be a valid network (ethereum, optimism, base, arbitrum). | defaults to undefined|
| **address** | [**string**] | Ethereum address | defaults to undefined|
| **limit** | [**number**] | Number of results to return (max 100) | (optional) defaults to 50|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**GetWalletBalances200Response**

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

# **mintNft**
> MintNft200Response mintNft(mintNftRequest)

Mints an NFT to one or more recipients on a specified network and contract, using a configured server wallet. Contact us to set up your wallet configuration if you don\'t have one.

### Example

```typescript
import {
    OnchainApi,
    Configuration,
    MintNftRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let mintNftRequest: MintNftRequest; //

const { status, data } = await apiInstance.mintNft(
    xWalletId,
    mintNftRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mintNftRequest** | **MintNftRequest**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|


### Return type

**MintNft200Response**

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
|**402** | 402 |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerAccountOnchain**
> RegisterUserOnChainResponse registerAccountOnchain(registerUserOnChainReqBody)

Register a new farcaster account onchain. Optionally you can pass in signers to register a new account and create multiple signers in a single transaction. Requires x-wallet-id header.

### Example

```typescript
import {
    OnchainApi,
    Configuration,
    RegisterUserOnChainReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let registerUserOnChainReqBody: RegisterUserOnChainReqBody; //

const { status, data } = await apiInstance.registerAccountOnchain(
    xWalletId,
    registerUserOnChainReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserOnChainReqBody** | **RegisterUserOnChainReqBody**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|


### Return type

**RegisterUserOnChainResponse**

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

# **sendFungiblesToUsers**
> TransactionSendFungiblesResponse sendFungiblesToUsers(transactionSendFungiblesReqBody)

Send fungibles in bulk to several farcaster users. A funded wallet is to required use this API. React out to us on the Neynar channel on farcaster to get your wallet address.

### Example

```typescript
import {
    OnchainApi,
    Configuration,
    TransactionSendFungiblesReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let xWalletId: string; //Wallet ID to use for transactions (default to undefined)
let transactionSendFungiblesReqBody: TransactionSendFungiblesReqBody; //

const { status, data } = await apiInstance.sendFungiblesToUsers(
    xWalletId,
    transactionSendFungiblesReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionSendFungiblesReqBody** | **TransactionSendFungiblesReqBody**|  | |
| **xWalletId** | [**string**] | Wallet ID to use for transactions | defaults to undefined|


### Return type

**TransactionSendFungiblesResponse**

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

# **simulateNftMint**
> SimulateNftMintResponse simulateNftMint()

Simulates mint calldata for the given recipients, contract, and network. Useful for previewing calldata and ABI before minting.

### Example

```typescript
import {
    OnchainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnchainApi(configuration);

let recipients: string; //JSON array of recipients (same structure as POST). (default to undefined)
let nftContractAddress: string; //Ethereum address (default to undefined)
let network: 'base' | 'optimism' | 'base-sepolia'; //Network to mint on. (default to undefined)

const { status, data } = await apiInstance.simulateNftMint(
    recipients,
    nftContractAddress,
    network
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipients** | [**string**] | JSON array of recipients (same structure as POST). | defaults to undefined|
| **nftContractAddress** | [**string**] | Ethereum address | defaults to undefined|
| **network** | [**&#39;base&#39; | &#39;optimism&#39; | &#39;base-sepolia&#39;**]**Array<&#39;base&#39; &#124; &#39;optimism&#39; &#124; &#39;base-sepolia&#39;>** | Network to mint on. | defaults to undefined|


### Return type

**SimulateNftMintResponse**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

