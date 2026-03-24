# CastApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCast**](#deletecast) | **DELETE** /v2/farcaster/cast/ | Delete a cast|
|[**fetchBulkCasts**](#fetchbulkcasts) | **GET** /v2/farcaster/casts/ | Bulk fetch casts|
|[**fetchCastQuotes**](#fetchcastquotes) | **GET** /v2/farcaster/cast/quotes/ | Cast Quotes|
|[**fetchEmbeddedUrlMetadata**](#fetchembeddedurlmetadata) | **GET** /v2/farcaster/cast/embed/crawl/ | Embedded URL metadata|
|[**lookupCastByHashOrUrl**](#lookupcastbyhashorurl) | **GET** /v2/farcaster/cast/ | By hash or URL|
|[**lookupCastConversation**](#lookupcastconversation) | **GET** /v2/farcaster/cast/conversation/ | Conversation for a cast|
|[**publishCast**](#publishcast) | **POST** /v2/farcaster/cast/ | Post a cast|
|[**searchCasts**](#searchcasts) | **GET** /v2/farcaster/cast/search/ | Search for casts|

# **deleteCast**
> OperationResponse deleteCast(deleteCastReqBody)

Delete an existing cast.  (In order to delete a cast `signer_uuid` must be approved)

### Example

```typescript
import {
    CastApi,
    Configuration,
    DeleteCastReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let deleteCastReqBody: DeleteCastReqBody; //

const { status, data } = await apiInstance.deleteCast(
    deleteCastReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCastReqBody** | **DeleteCastReqBody**|  | |


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchBulkCasts**
> CastsResponse fetchBulkCasts()

Fetch multiple casts using their respective hashes.

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let casts: string; //Hashes of the cast to be retrived (Comma separated, no spaces) (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //adds viewer_context to cast object to show whether viewer has liked or recasted the cast. (optional) (default to undefined)
let sortType: 'trending' | 'likes' | 'recasts' | 'replies' | 'recent'; //Optional parameter to sort the casts based on different criteria (optional) (default to undefined)

const { status, data } = await apiInstance.fetchBulkCasts(
    casts,
    xNeynarExperimental,
    viewerFid,
    sortType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **casts** | [**string**] | Hashes of the cast to be retrived (Comma separated, no spaces) | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | adds viewer_context to cast object to show whether viewer has liked or recasted the cast. | (optional) defaults to undefined|
| **sortType** | [**&#39;trending&#39; | &#39;likes&#39; | &#39;recasts&#39; | &#39;replies&#39; | &#39;recent&#39;**]**Array<&#39;trending&#39; &#124; &#39;likes&#39; &#124; &#39;recasts&#39; &#124; &#39;replies&#39; &#124; &#39;recent&#39;>** | Optional parameter to sort the casts based on different criteria | (optional) defaults to undefined|


### Return type

**CastsResponse**

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

# **fetchCastQuotes**
> FetchCastQuotes200Response fetchCastQuotes()

Fetch casts that quote a given cast

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let identifier: string; //Cast identifier (It\'s either a URL or a hash) (default to undefined)
let type: 'url' | 'hash'; //The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; // (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastQuotes(
    identifier,
    type,
    xNeynarExperimental,
    viewerFid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifier** | [**string**] | Cast identifier (It\&#39;s either a URL or a hash) | defaults to undefined|
| **type** | [**&#39;url&#39; | &#39;hash&#39;**]**Array<&#39;url&#39; &#124; &#39;hash&#39;>** | The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**FetchCastQuotes200Response**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchEmbeddedUrlMetadata**
> CastEmbedCrawlResponse fetchEmbeddedUrlMetadata()

Crawls the given URL and returns metadata useful when embedding the URL in a cast.

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let url: string; //URL to crawl metadata of (default to undefined)

const { status, data } = await apiInstance.fetchEmbeddedUrlMetadata(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] | URL to crawl metadata of | defaults to undefined|


### Return type

**CastEmbedCrawlResponse**

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

# **lookupCastByHashOrUrl**
> CastResponse lookupCastByHashOrUrl()

Gets information about an individual cast by passing in a Farcaster web URL or cast hash

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let identifier: string; //Cast identifier (It\'s either a URL or a hash) (default to undefined)
let type: 'url' | 'hash'; //The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let viewerFid: number; //adds viewer_context to cast object to show whether viewer has liked or recasted the cast. (optional) (default to undefined)

const { status, data } = await apiInstance.lookupCastByHashOrUrl(
    identifier,
    type,
    xNeynarExperimental,
    viewerFid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifier** | [**string**] | Cast identifier (It\&#39;s either a URL or a hash) | defaults to undefined|
| **type** | [**&#39;url&#39; | &#39;hash&#39;**]**Array<&#39;url&#39; &#124; &#39;hash&#39;>** | The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **viewerFid** | [**number**] | adds viewer_context to cast object to show whether viewer has liked or recasted the cast. | (optional) defaults to undefined|


### Return type

**CastResponse**

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

# **lookupCastConversation**
> Conversation lookupCastConversation()

Gets all casts related to a conversation surrounding a cast by passing in a cast hash or Farcaster URL. Includes all the ancestors of a cast up to the root parent in a chronological order. Includes all direct_replies to the cast up to the reply_depth specified in the query parameter.

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let identifier: string; //Cast identifier (It\'s either a URL or a hash) (default to undefined)
let type: 'url' | 'hash'; //The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let replyDepth: number; //The depth of replies in the conversation that will be returned (default 2) (optional) (default to 2)
let includeChronologicalParentCasts: boolean; //Include all parent casts in chronological order (optional) (default to false)
let viewerFid: number; //Providing this will return a conversation that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let sortType: 'chron' | 'desc_chron' | 'algorithmic'; //Sort type for the ordering of descendants. Default is `chron` (optional) (default to undefined)
let fold: 'above' | 'below'; //Show conversation above or below the fold. Lower quality responses are hidden below the fold. Not passing in a value shows the full conversation without any folding. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 20)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.lookupCastConversation(
    identifier,
    type,
    xNeynarExperimental,
    replyDepth,
    includeChronologicalParentCasts,
    viewerFid,
    sortType,
    fold,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifier** | [**string**] | Cast identifier (It\&#39;s either a URL or a hash) | defaults to undefined|
| **type** | [**&#39;url&#39; | &#39;hash&#39;**]**Array<&#39;url&#39; &#124; &#39;hash&#39;>** | The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **replyDepth** | [**number**] | The depth of replies in the conversation that will be returned (default 2) | (optional) defaults to 2|
| **includeChronologicalParentCasts** | [**boolean**] | Include all parent casts in chronological order | (optional) defaults to false|
| **viewerFid** | [**number**] | Providing this will return a conversation that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **sortType** | [**&#39;chron&#39; | &#39;desc_chron&#39; | &#39;algorithmic&#39;**]**Array<&#39;chron&#39; &#124; &#39;desc_chron&#39; &#124; &#39;algorithmic&#39;>** | Sort type for the ordering of descendants. Default is &#x60;chron&#x60; | (optional) defaults to undefined|
| **fold** | [**&#39;above&#39; | &#39;below&#39;**]**Array<&#39;above&#39; &#124; &#39;below&#39;>** | Show conversation above or below the fold. Lower quality responses are hidden below the fold. Not passing in a value shows the full conversation without any folding. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**Conversation**

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

# **publishCast**
> PostCastResponse publishCast(postCastReqBody)

Posts a cast or cast reply. Works with mentions and embeds.   (In order to post a cast `signer_uuid` must be approved)

### Example

```typescript
import {
    CastApi,
    Configuration,
    PostCastReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let postCastReqBody: PostCastReqBody; //

const { status, data } = await apiInstance.publishCast(
    postCastReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCastReqBody** | **PostCastReqBody**|  | |


### Return type

**PostCastResponse**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCasts**
> CastsSearchResponse searchCasts()

Search for casts based on a query string, with optional AND filters

### Example

```typescript
import {
    CastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CastApi(configuration);

let q: string; //Query string to search for casts. Supported operators:  | Operator  | Description                                                                                              | | --------- | -------------------------------------------------------------------------------------------------------- | | `+`       | Acts as the AND operator. This is the default operator between terms and can usually be omitted.         | | `\\|`      | Acts as the OR operator.                                                                                 | | `*`       | When used at the end of a term, signifies a prefix query.                                                  | | `\"`       | Wraps several terms into a phrase (for example, `\"star wars\"`).                                          | | `(`, `)`  | Wrap a clause for precedence (for example, `star + (wars \\| trek)`).                                     | | `~n`      | When used after a term (for example, `satr~3`), sets `fuzziness`. When used after a phrase, sets `slop`. | | `-`       | Negates the term.                                                                                        | | `before:` | Search for casts before a specific date. (e.g. `before:2025-04-20` or `before:2025-04-20T23:59:59`)      | | `after:`  | Search for casts after a specific date. (e.g. `after:2025-04-20` or `after:2025-04-20T00:00:00`)         | (default to undefined)
let xNeynarExperimental: boolean; //Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. (optional) (default to false)
let mode: 'literal' | 'semantic' | 'hybrid'; //Choices are: - `literal` - Searches for the words in the query string (default) - `semantic` - Searches for the meaning of the query string - `hybrid` - Combines both literal and semantic results (optional) (default to undefined)
let sortType: 'desc_chron' | 'chron' | 'algorithmic'; //Choices are: - `desc_chron` - All casts sorted by time in a descending order (default) - `chron` - All casts sorted by time in ascending order - `algorithmic` - Casts sorted by engagement and time (optional) (default to undefined)
let authorFid: number; //Fid of the user whose casts you want to search (optional) (default to undefined)
let viewerFid: number; //Providing this will return search results that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let parentUrl: string; //Parent URL of the casts you want to search (optional) (default to undefined)
let channelId: string; //Channel ID of the casts you want to search (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor (optional) (default to undefined)

const { status, data } = await apiInstance.searchCasts(
    q,
    xNeynarExperimental,
    mode,
    sortType,
    authorFid,
    viewerFid,
    parentUrl,
    channelId,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query string to search for casts. Supported operators:  | Operator  | Description                                                                                              | | --------- | -------------------------------------------------------------------------------------------------------- | | &#x60;+&#x60;       | Acts as the AND operator. This is the default operator between terms and can usually be omitted.         | | &#x60;\\|&#x60;      | Acts as the OR operator.                                                                                 | | &#x60;*&#x60;       | When used at the end of a term, signifies a prefix query.                                                  | | &#x60;\&quot;&#x60;       | Wraps several terms into a phrase (for example, &#x60;\&quot;star wars\&quot;&#x60;).                                          | | &#x60;(&#x60;, &#x60;)&#x60;  | Wrap a clause for precedence (for example, &#x60;star + (wars \\| trek)&#x60;).                                     | | &#x60;~n&#x60;      | When used after a term (for example, &#x60;satr~3&#x60;), sets &#x60;fuzziness&#x60;. When used after a phrase, sets &#x60;slop&#x60;. | | &#x60;-&#x60;       | Negates the term.                                                                                        | | &#x60;before:&#x60; | Search for casts before a specific date. (e.g. &#x60;before:2025-04-20&#x60; or &#x60;before:2025-04-20T23:59:59&#x60;)      | | &#x60;after:&#x60;  | Search for casts after a specific date. (e.g. &#x60;after:2025-04-20&#x60; or &#x60;after:2025-04-20T00:00:00&#x60;)         | | defaults to undefined|
| **xNeynarExperimental** | [**boolean**] | Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. | (optional) defaults to false|
| **mode** | [**&#39;literal&#39; | &#39;semantic&#39; | &#39;hybrid&#39;**]**Array<&#39;literal&#39; &#124; &#39;semantic&#39; &#124; &#39;hybrid&#39;>** | Choices are: - &#x60;literal&#x60; - Searches for the words in the query string (default) - &#x60;semantic&#x60; - Searches for the meaning of the query string - &#x60;hybrid&#x60; - Combines both literal and semantic results | (optional) defaults to undefined|
| **sortType** | [**&#39;desc_chron&#39; | &#39;chron&#39; | &#39;algorithmic&#39;**]**Array<&#39;desc_chron&#39; &#124; &#39;chron&#39; &#124; &#39;algorithmic&#39;>** | Choices are: - &#x60;desc_chron&#x60; - All casts sorted by time in a descending order (default) - &#x60;chron&#x60; - All casts sorted by time in ascending order - &#x60;algorithmic&#x60; - Casts sorted by engagement and time | (optional) defaults to undefined|
| **authorFid** | [**number**] | Fid of the user whose casts you want to search | (optional) defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return search results that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **parentUrl** | [**string**] | Parent URL of the casts you want to search | (optional) defaults to undefined|
| **channelId** | [**string**] | Channel ID of the casts you want to search | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|


### Return type

**CastsSearchResponse**

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

