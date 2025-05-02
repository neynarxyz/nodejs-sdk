# ReactionApi

All URIs are relative to *https://api.neynar.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteReaction**](#deletereaction) | **DELETE** /farcaster/reaction | Delete reaction|
|[**fetchCastReactions**](#fetchcastreactions) | **GET** /farcaster/reactions/cast | Reactions for cast|
|[**fetchUserReactions**](#fetchuserreactions) | **GET** /farcaster/reactions/user | Reactions for user|
|[**publishReaction**](#publishreaction) | **POST** /farcaster/reaction | Post a reaction|

# **deleteReaction**
> OperationResponse deleteReaction(reactionReqBody)

Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 

### Example

```typescript
import {
    ReactionApi,
    Configuration,
    ReactionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionApi(configuration);

let reactionReqBody: ReactionReqBody; //

const { status, data } = await apiInstance.deleteReaction(
    reactionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reactionReqBody** | **ReactionReqBody**|  | |


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

# **fetchCastReactions**
> ReactionsCastResponse fetchCastReactions()

Fetches reactions for a given cast

### Example

```typescript
import {
    ReactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionApi(configuration);

let hash: string; // (default to '0xfe90f9de682273e05b201629ad2338bdcd89b6be')
let types: Array<ReactionsType>; //Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \'likes\' and \'recasts\'. By default api returns both. To select multiple types, use a comma-separated list of these values.  (default to undefined)
let viewerFid: number; //Providing this will return a list of reactions that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCastReactions(
    hash,
    types,
    viewerFid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hash** | [**string**] |  | defaults to '0xfe90f9de682273e05b201629ad2338bdcd89b6be'|
| **types** | **Array&lt;ReactionsType&gt;** | Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values.  | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ReactionsCastResponse**

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

# **fetchUserReactions**
> ReactionsResponse fetchUserReactions()

Fetches reactions for a given user

### Example

```typescript
import {
    ReactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionApi(configuration);

let fid: number; // (default to undefined)
let type: ReactionsType; //Type of reaction to fetch (likes or recasts or all) (default to undefined)
let viewerFid: number; //Providing this will return a list of reactions that respects this user\'s mutes and blocks and includes `viewer_context`. (optional) (default to undefined)
let limit: number; //Number of results to fetch (optional) (default to 25)
let cursor: string; //Pagination cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchUserReactions(
    fid,
    type,
    viewerFid,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] |  | defaults to undefined|
| **type** | **ReactionsType** | Type of reaction to fetch (likes or recasts or all) | defaults to undefined|
| **viewerFid** | [**number**] | Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results to fetch | (optional) defaults to 25|
| **cursor** | [**string**] | Pagination cursor. | (optional) defaults to undefined|


### Return type

**ReactionsResponse**

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

# **publishReaction**
> OperationResponse publishReaction(reactionReqBody)

Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 

### Example

```typescript
import {
    ReactionApi,
    Configuration,
    ReactionReqBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ReactionApi(configuration);

let reactionReqBody: ReactionReqBody; //

const { status, data } = await apiInstance.publishReaction(
    reactionReqBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reactionReqBody** | **ReactionReqBody**|  | |


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

