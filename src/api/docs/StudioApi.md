# StudioApi

All URIs are relative to *https://api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**associateDeployment**](#associatedeployment) | **POST** /v2/studio/deployment/account-association | Set account association|
|[**build**](#build) | **POST** /v2/studio/deployment/build | Build generated app with automatic error fixing|
|[**createDeployment**](#createdeployment) | **POST** /v2/studio/deployment/ | Create a miniapp generator deployment|
|[**deleteDeployment**](#deletedeployment) | **DELETE** /v2/studio/deployment/ | Delete deployment(s)|
|[**deleteRows**](#deleterows) | **DELETE** /v2/studio/deployment/database/tables/{table_name}/rows | Delete rows from table|
|[**deleteSecrets**](#deletesecrets) | **DELETE** /v2/studio/deployment/secrets/ | Delete deployment secrets|
|[**deployToVercel**](#deploytovercel) | **POST** /v2/studio/vercel/ | Deploy miniapp to Vercel|
|[**executeSql**](#executesql) | **POST** /v2/studio/deployment/database/sql | Execute raw SQL query (admin only)|
|[**getAccountAssociation**](#getaccountassociation) | **GET** /v2/studio/deployment/account-association | Get account association of a miniapp|
|[**getConversationMessages**](#getconversationmessages) | **GET** /v2/studio/deployment/conversations/messages | Get messages in a conversation|
|[**getDeployment**](#getdeployment) | **GET** /v2/studio/deployment/by-name-and-fid | Get deployment info|
|[**getDeploymentFile**](#getdeploymentfile) | **GET** /v2/studio/deployment/file | Get deployment file contents|
|[**getDevStatus**](#getdevstatus) | **GET** /v2/studio/deployment/dev-status | Get dev status of a miniapp|
|[**getTableSchema**](#gettableschema) | **GET** /v2/studio/deployment/database/tables/{table_name}/schema | Get table schema|
|[**insertRows**](#insertrows) | **POST** /v2/studio/deployment/database/tables/{table_name}/rows | Insert rows into table|
|[**listConversations**](#listconversations) | **GET** /v2/studio/deployment/conversations | List conversations for a deployment|
|[**listDeploymentFiles**](#listdeploymentfiles) | **GET** /v2/studio/deployment/files | List deployment files|
|[**listDeployments**](#listdeployments) | **GET** /v2/studio/deployment/ | List deployments|
|[**listSecrets**](#listsecrets) | **GET** /v2/studio/deployment/secrets/ | List deployment secrets|
|[**listTables**](#listtables) | **GET** /v2/studio/deployment/database/tables | List all tables in deployment database|
|[**promptDeploymentStream**](#promptdeploymentstream) | **POST** /v2/studio/deployment/prompt/stream | Prompt a deployment with streaming response|
|[**queryTable**](#querytable) | **POST** /v2/studio/deployment/database/query | Query table data|
|[**recover**](#recover) | **POST** /v2/studio/deployment/recover | Recover dev server with two-phase strategy|
|[**startApp**](#startapp) | **POST** /v2/studio/deployment/start | Start generated miniapp|
|[**stopApp**](#stopapp) | **POST** /v2/studio/deployment/stop | Stop generated miniapp|
|[**updateRows**](#updaterows) | **PATCH** /v2/studio/deployment/database/tables/{table_name}/rows | Update rows in table|
|[**uploadImage**](#uploadimage) | **POST** /v2/studio/deployment/upload-image | Upload image to deployment|
|[**uploadImageUrl**](#uploadimageurl) | **POST** /v2/studio/deployment/upload-image-url | Upload image from URL to deployment|
|[**upsertSecrets**](#upsertsecrets) | **POST** /v2/studio/deployment/secrets/ | Upsert deployment secrets|
|[**vercelDeploymentLogs**](#verceldeploymentlogs) | **GET** /v2/studio/vercel/logs | Get Vercel deployment build logs|
|[**vercelDeploymentStatus**](#verceldeploymentstatus) | **GET** /v2/studio/vercel/status | Get Vercel deployment status|

# **associateDeployment**
> AssociateDeployment200Response associateDeployment(associateDeploymentRequest)

Associates a generated miniapp with a Farcaster account using a JFS-signed domain association. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    AssociateDeploymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let associateDeploymentRequest: AssociateDeploymentRequest; //

const { status, data } = await apiInstance.associateDeployment(
    associateDeploymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **associateDeploymentRequest** | **AssociateDeploymentRequest**|  | |


### Return type

**AssociateDeployment200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build**
> build(buildRequest)

Runs Next.js build process for the generated app. If build fails, automatically calls a build-fixer agent to resolve errors. Streams build output and agent responses via Server-Sent Events. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    BuildRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let buildRequest: BuildRequest; //

const { status, data } = await apiInstance.build(
    buildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **buildRequest** | **BuildRequest**|  | |


### Return type

void (empty response body)

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDeployment**
> ListDeployments200ResponseInner createDeployment(createDeploymentRequest)

Creates and deploys an instance of the miniapp generator for a user. Requires authentication via API key in the request header. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    CreateDeploymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let createDeploymentRequest: CreateDeploymentRequest; //

const { status, data } = await apiInstance.createDeployment(
    createDeploymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDeploymentRequest** | **CreateDeploymentRequest**|  | |


### Return type

**ListDeployments200ResponseInner**

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

# **deleteDeployment**
> DeleteDeployment200Response deleteDeployment(deleteDeploymentRequest)

Deletes a specific miniapp generator deployment or all deployments for a FID. If deployment_id or name is provided, deletes single deployment. If only FID is provided, deletes all deployments for that FID. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    DeleteDeploymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deleteDeploymentRequest: DeleteDeploymentRequest; //

const { status, data } = await apiInstance.deleteDeployment(
    deleteDeploymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteDeploymentRequest** | **DeleteDeploymentRequest**|  | |


### Return type

**DeleteDeployment200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRows**
> DeleteRows200Response deleteRows(deleteRowsRequest)

Deletes rows matching the WHERE conditions. WHERE clause is required to prevent accidental bulk deletes.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    DeleteRowsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let tableName: string; // (default to undefined)
let deleteRowsRequest: DeleteRowsRequest; //

const { status, data } = await apiInstance.deleteRows(
    tableName,
    deleteRowsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRowsRequest** | **DeleteRowsRequest**|  | |
| **tableName** | [**string**] |  | defaults to undefined|


### Return type

**DeleteRows200Response**

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

# **deleteSecrets**
> UpsertSecrets200Response deleteSecrets(deleteSecretsRequest)

Deletes environment variables (secrets) from a deployment.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    DeleteSecretsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deleteSecretsRequest: DeleteSecretsRequest; //

const { status, data } = await apiInstance.deleteSecrets(
    deleteSecretsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteSecretsRequest** | **DeleteSecretsRequest**|  | |


### Return type

**UpsertSecrets200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployToVercel**
> DeployToVercel200Response deployToVercel(deployToVercelRequest)

Publishes the generated miniapp to Vercel via GitHub. Creates a GitHub repository, pushes code, creates a Vercel project linked to GitHub, and triggers deployment. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    DeployToVercelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deployToVercelRequest: DeployToVercelRequest; //

const { status, data } = await apiInstance.deployToVercel(
    deployToVercelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deployToVercelRequest** | **DeployToVercelRequest**|  | |


### Return type

**DeployToVercel200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeSql**
> ExecuteSql200Response executeSql(executeSqlRequest)

Executes a raw SQL query against the deployment database. Only SELECT, WITH, and EXPLAIN queries are allowed. Admin access required.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    ExecuteSqlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let executeSqlRequest: ExecuteSqlRequest; //

const { status, data } = await apiInstance.executeSql(
    executeSqlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executeSqlRequest** | **ExecuteSqlRequest**|  | |


### Return type

**ExecuteSql200Response**

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

# **getAccountAssociation**
> GetAccountAssociation200Response getAccountAssociation()

Retrieves the account-association.json file from a miniapp deployment, which contains the JFS-signed domain association. Requires API key authentication.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (optional) (default to undefined)
let namespace: string; //Kubernetes namespace name (optional) (default to undefined)
let name: string; //Kubernetes deployment name (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountAssociation(
    deploymentId,
    namespace,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID | (optional) defaults to undefined|
| **namespace** | [**string**] | Kubernetes namespace name | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name | (optional) defaults to undefined|


### Return type

**GetAccountAssociation200Response**

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

# **getConversationMessages**
> GetConversationMessages200Response getConversationMessages()

Retrieves all messages in a specific conversation. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let conversationId: string; //Conversation ID (default to undefined)
let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user; if not provided, namespace must be provided (optional) (default to undefined)
let name: string; //Kubernetes deployment name. Required if deployment_id not provided. (optional) (default to undefined)
let namespace: string; //Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. (optional) (default to undefined)
let includeDeleted: boolean; //Include deleted messages in the response. Defaults to false. (optional) (default to false)

const { status, data } = await apiInstance.getConversationMessages(
    conversationId,
    deploymentId,
    fid,
    name,
    namespace,
    includeDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | Conversation ID | defaults to undefined|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user; if not provided, namespace must be provided | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name. Required if deployment_id not provided. | (optional) defaults to undefined|
| **namespace** | [**string**] | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | (optional) defaults to undefined|
| **includeDeleted** | [**boolean**] | Include deleted messages in the response. Defaults to false. | (optional) defaults to false|


### Return type

**GetConversationMessages200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeployment**
> ListDeployments200ResponseInner getDeployment()

Fetches info about a miniapp generator deployment by its deployment_id or name and creator\'s Farcaster ID. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user; if not provided, namespace must be provided (optional) (default to undefined)
let name: string; //Kubernetes deployment name. Required if deployment_id not provided. (optional) (default to undefined)
let namespace: string; //Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. (optional) (default to undefined)

const { status, data } = await apiInstance.getDeployment(
    deploymentId,
    fid,
    name,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user; if not provided, namespace must be provided | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name. Required if deployment_id not provided. | (optional) defaults to undefined|
| **namespace** | [**string**] | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | (optional) defaults to undefined|


### Return type

**ListDeployments200ResponseInner**

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

# **getDeploymentFile**
> GetDeploymentFile200Response getDeploymentFile()

Retrieves the contents of a specific file from the generated app. Requires Studio admin authentication or FID ownership validation. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let filePath: string; //File path relative to gen/ (default to undefined)
let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user; if not provided, namespace must be provided (optional) (default to undefined)
let name: string; //Kubernetes deployment name. Required if deployment_id not provided. (optional) (default to undefined)
let namespace: string; //Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. (optional) (default to undefined)

const { status, data } = await apiInstance.getDeploymentFile(
    filePath,
    deploymentId,
    fid,
    name,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filePath** | [**string**] | File path relative to gen/ | defaults to undefined|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user; if not provided, namespace must be provided | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name. Required if deployment_id not provided. | (optional) defaults to undefined|
| **namespace** | [**string**] | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | (optional) defaults to undefined|


### Return type

**GetDeploymentFile200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDevStatus**
> GetDevStatus200Response getDevStatus()

Retrieves the dev-status.json file from a miniapp deployment, which tracks the progress of app development phases. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (optional) (default to undefined)
let namespace: string; //Kubernetes namespace name (optional) (default to undefined)
let name: string; //Kubernetes deployment name (optional) (default to undefined)

const { status, data } = await apiInstance.getDevStatus(
    deploymentId,
    namespace,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID | (optional) defaults to undefined|
| **namespace** | [**string**] | Kubernetes namespace name | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name | (optional) defaults to undefined|


### Return type

**GetDevStatus200Response**

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

# **getTableSchema**
> GetTableSchema200Response getTableSchema()

Retrieves the complete schema for a table including columns, indexes, and foreign keys.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let tableName: string; // (default to undefined)
let deploymentId: string; //Deployment ID (UUID) (default to undefined)
let fid: number; //Farcaster ID of the user. Required for non-admin users. (optional) (default to undefined)

const { status, data } = await apiInstance.getTableSchema(
    tableName,
    deploymentId,
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tableName** | [**string**] |  | defaults to undefined|
| **deploymentId** | [**string**] | Deployment ID (UUID) | defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user. Required for non-admin users. | (optional) defaults to undefined|


### Return type

**GetTableSchema200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertRows**
> InsertRows200Response insertRows(insertRowsRequest)

Inserts one or more rows into the specified table. Returns the inserted rows with generated values.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    InsertRowsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let tableName: string; // (default to undefined)
let insertRowsRequest: InsertRowsRequest; //

const { status, data } = await apiInstance.insertRows(
    tableName,
    insertRowsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **insertRowsRequest** | **InsertRowsRequest**|  | |
| **tableName** | [**string**] |  | defaults to undefined|


### Return type

**InsertRows200Response**

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

# **listConversations**
> ListConversations200Response listConversations()

Lists all conversations for a specific deployment. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID). If provided, filters conversations to this deployment only. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all conversations. (optional) (default to undefined)
let name: string; //Kubernetes deployment name. If provided, filters conversations to this deployment only. (optional) (default to undefined)
let includeDeleted: boolean; //Include deleted conversations in the response. Defaults to false. (optional) (default to false)

const { status, data } = await apiInstance.listConversations(
    deploymentId,
    fid,
    name,
    includeDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID). If provided, filters conversations to this deployment only. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all conversations. | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name. If provided, filters conversations to this deployment only. | (optional) defaults to undefined|
| **includeDeleted** | [**boolean**] | Include deleted conversations in the response. Defaults to false. | (optional) defaults to false|


### Return type

**ListConversations200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDeploymentFiles**
> ListDeploymentFiles200Response listDeploymentFiles()

Lists files in a directory of the generated app. Requires Studio admin authentication or FID ownership validation. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user; if not provided, namespace must be provided (optional) (default to undefined)
let name: string; //Kubernetes deployment name. Required if deployment_id not provided. (optional) (default to undefined)
let namespace: string; //Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. (optional) (default to undefined)
let directory: string; //Directory path relative to gen/ (defaults to root) (optional) (default to undefined)

const { status, data } = await apiInstance.listDeploymentFiles(
    deploymentId,
    fid,
    name,
    namespace,
    directory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user; if not provided, namespace must be provided | (optional) defaults to undefined|
| **name** | [**string**] | Kubernetes deployment name. Required if deployment_id not provided. | (optional) defaults to undefined|
| **namespace** | [**string**] | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | (optional) defaults to undefined|
| **directory** | [**string**] | Directory path relative to gen/ (defaults to root) | (optional) defaults to undefined|


### Return type

**ListDeploymentFiles200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDeployments**
> Array<ListDeployments200ResponseInner> listDeployments()

Lists all miniapp generator deployments for a user. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let fid: number; //Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all deployments. (optional) (default to undefined)
let limit: number; //Maximum number of deployments to return. Defaults to 50, max 1000. (optional) (default to 50)
let offset: number; //Number of deployments to skip for pagination. Defaults to 0. (optional) (default to 0)
let includeDeleted: boolean; //Include deleted deployments in the response. Defaults to false. (optional) (default to false)

const { status, data } = await apiInstance.listDeployments(
    fid,
    limit,
    offset,
    includeDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fid** | [**number**] | Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all deployments. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of deployments to return. Defaults to 50, max 1000. | (optional) defaults to 50|
| **offset** | [**number**] | Number of deployments to skip for pagination. Defaults to 0. | (optional) defaults to 0|
| **includeDeleted** | [**boolean**] | Include deleted deployments in the response. Defaults to false. | (optional) defaults to false|


### Return type

**Array<ListDeployments200ResponseInner>**

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
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSecrets**
> ListSecrets200Response listSecrets()

Retrieves all secrets for a deployment.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID to list secrets for (default to undefined)
let key: string; //Optional filter by environment variable name (optional) (default to undefined)

const { status, data } = await apiInstance.listSecrets(
    deploymentId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID to list secrets for | defaults to undefined|
| **key** | [**string**] | Optional filter by environment variable name | (optional) defaults to undefined|


### Return type

**ListSecrets200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTables**
> ListTables200Response listTables()

Lists all tables and views in the deployment database, excluding system tables.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID) (default to undefined)
let fid: number; //Farcaster ID of the user. Required for non-admin users. (optional) (default to undefined)

const { status, data } = await apiInstance.listTables(
    deploymentId,
    fid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID) | defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user. Required for non-admin users. | (optional) defaults to undefined|


### Return type

**ListTables200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promptDeploymentStream**
> promptDeploymentStream(promptDeploymentStreamRequest)

Sends a prompt to a specific miniapp generator deployment and returns a streaming response using Server-Sent Events. The response is a continuous stream of Server-Sent Events, not a single JSON payload. Each event contains a JSON object with type, message, and other fields specific to the message type. Requires authentication via API key in the request header. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    PromptDeploymentStreamRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let promptDeploymentStreamRequest: PromptDeploymentStreamRequest; //

const { status, data } = await apiInstance.promptDeploymentStream(
    promptDeploymentStreamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptDeploymentStreamRequest** | **PromptDeploymentStreamRequest**|  | |


### Return type

void (empty response body)

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
|**404** | Resource not found |  -  |
|**413** | 413 |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryTable**
> QueryTable200Response queryTable(queryTableRequest)

Query data from a table with pagination and sorting.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    QueryTableRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let queryTableRequest: QueryTableRequest; //

const { status, data } = await apiInstance.queryTable(
    queryTableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryTableRequest** | **QueryTableRequest**|  | |


### Return type

**QueryTable200Response**

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

# **recover**
> recover(recoverRequest)

Attempts to recover a broken dev server. Phase 1: reads dev server error logs and sends them to an AI agent for fixing, then waits for HMR to auto-rebuild. Phase 2: if HMR fails, falls back to a full npm build with AI retry loop. Streams progress events via Server-Sent Events. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    RecoverRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let recoverRequest: RecoverRequest; //

const { status, data } = await apiInstance.recover(
    recoverRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recoverRequest** | **RecoverRequest**|  | |


### Return type

void (empty response body)

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startApp**
> StartApp200Response startApp(startAppRequest)

Starts the Next.js development server for the generated miniapp. Requires Studio admin authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    StartAppRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let startAppRequest: StartAppRequest; //

const { status, data } = await apiInstance.startApp(
    startAppRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startAppRequest** | **StartAppRequest**|  | |


### Return type

**StartApp200Response**

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
|**408** | 408 |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stopApp**
> StartApp200Response stopApp(startAppRequest)

Stops the Next.js development server for the generated miniapp. Requires Studio admin authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    StartAppRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let startAppRequest: StartAppRequest; //

const { status, data } = await apiInstance.stopApp(
    startAppRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startAppRequest** | **StartAppRequest**|  | |


### Return type

**StartApp200Response**

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

# **updateRows**
> UpdateRows200Response updateRows(updateRowsRequest)

Updates rows matching the WHERE conditions. WHERE clause is required to prevent accidental bulk updates.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    UpdateRowsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let tableName: string; // (default to undefined)
let updateRowsRequest: UpdateRowsRequest; //

const { status, data } = await apiInstance.updateRows(
    tableName,
    updateRowsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRowsRequest** | **UpdateRowsRequest**|  | |
| **tableName** | [**string**] |  | defaults to undefined|


### Return type

**UpdateRows200Response**

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

# **uploadImage**
> UploadImage200Response uploadImage()

Uploads an image file to the generated miniapp public folder. The image will be accessible as a static asset on the deployed miniapp. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

const { status, data } = await apiInstance.uploadImage();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UploadImage200Response**

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

# **uploadImageUrl**
> UploadImage200Response uploadImageUrl(uploadImageUrlRequest)

Downloads an image from the provided URL and saves it to the generated miniapp public folder. The image will be accessible as a static asset on the deployed miniapp. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    UploadImageUrlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let uploadImageUrlRequest: UploadImageUrlRequest; //

const { status, data } = await apiInstance.uploadImageUrl(
    uploadImageUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadImageUrlRequest** | **UploadImageUrlRequest**|  | |


### Return type

**UploadImage200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsertSecrets**
> UpsertSecrets200Response upsertSecrets(upsertSecretsRequest)

Upsert secrets for a deployment.

### Example

```typescript
import {
    StudioApi,
    Configuration,
    UpsertSecretsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let upsertSecretsRequest: UpsertSecretsRequest; //

const { status, data } = await apiInstance.upsertSecrets(
    upsertSecretsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertSecretsRequest** | **UpsertSecretsRequest**|  | |


### Return type

**UpsertSecrets200Response**

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
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vercelDeploymentLogs**
> VercelDeploymentLogs200Response vercelDeploymentLogs()

Retrieves the build logs for a Vercel deployment. Useful for debugging failed deployments. Requires Studio admin authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user (optional) (default to undefined)
let namespace: string; //K8s Namespace name (optional) (default to undefined)
let name: string; //Deployment name used to identify the Vercel project. Required if deployment_id not provided. (optional) (default to undefined)
let limit: number; //Maximum number of log events to return. Defaults to 100. (optional) (default to 100)

const { status, data } = await apiInstance.vercelDeploymentLogs(
    deploymentId,
    fid,
    namespace,
    name,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user | (optional) defaults to undefined|
| **namespace** | [**string**] | K8s Namespace name | (optional) defaults to undefined|
| **name** | [**string**] | Deployment name used to identify the Vercel project. Required if deployment_id not provided. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of log events to return. Defaults to 100. | (optional) defaults to 100|


### Return type

**VercelDeploymentLogs200Response**

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
|**403** | Forbidden |  -  |
|**404** | Resource not found |  -  |
|**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vercelDeploymentStatus**
> VercelDeploymentStatus200Response vercelDeploymentStatus()

Retrieves the status of a Vercel deployment for a miniapp. Looks up the Vercel project ID from the deployment and queries Vercel API for deployment status. Requires API key authentication. Note: Studio CU is tracked based on LLM token usage, not per API call.

### Example

```typescript
import {
    StudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StudioApi(configuration);

let deploymentId: string; //Deployment ID (UUID). Required if name not provided. (optional) (default to undefined)
let fid: number; //Farcaster ID of the user; if not provided, namespace must be provided (optional) (default to undefined)
let namespace: string; //K8s Namespace name (optional) (default to undefined)
let name: string; //Deployment name used to identify the Vercel project. Required if deployment_id not provided. (optional) (default to undefined)

const { status, data } = await apiInstance.vercelDeploymentStatus(
    deploymentId,
    fid,
    namespace,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentId** | [**string**] | Deployment ID (UUID). Required if name not provided. | (optional) defaults to undefined|
| **fid** | [**number**] | Farcaster ID of the user; if not provided, namespace must be provided | (optional) defaults to undefined|
| **namespace** | [**string**] | K8s Namespace name | (optional) defaults to undefined|
| **name** | [**string**] | Deployment name used to identify the Vercel project. Required if deployment_id not provided. | (optional) defaults to undefined|


### Return type

**VercelDeploymentStatus200Response**

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

