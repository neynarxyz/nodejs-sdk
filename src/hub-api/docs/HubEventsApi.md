# HubEventsApi

All URIs are relative to *https://hub-api.neynar.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchEvents**](#fetchevents) | **GET** /v1/events | Page of events|
|[**lookupEvent**](#lookupevent) | **GET** /v1/eventById | Event by ID|

# **fetchEvents**
> FetchEvents200Response fetchEvents()

Fetch a list of events.

### Example

```typescript
import {
    HubEventsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HubEventsApi(configuration);

let fromEventId: number; //An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event.  (optional) (default to undefined)

const { status, data } = await apiInstance.fetchEvents(
    fromEventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromEventId** | [**number**] | An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event.  | (optional) defaults to undefined|


### Return type

**FetchEvents200Response**

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

# **lookupEvent**
> HubEvent lookupEvent()

Lookup an event by its ID.

### Example

```typescript
import {
    HubEventsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HubEventsApi(configuration);

let eventId: number; //The Hub Id of the event (default to undefined)

const { status, data } = await apiInstance.lookupEvent(
    eventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**number**] | The Hub Id of the event | defaults to undefined|


### Return type

**HubEvent**

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

