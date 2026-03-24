# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**webhook_id** | **string** |  | [default to undefined]
**developer_uuid** | **string** |  | [default to undefined]
**target_url** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**secrets** | [**Array&lt;WebhookSecret&gt;**](WebhookSecret.md) |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**http_timeout** | **string** |  | [default to undefined]
**rate_limit** | **number** |  | [default to undefined]
**active** | **boolean** |  | [default to undefined]
**rate_limit_duration** | **string** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**deleted_at** | **string** |  | [default to undefined]
**subscription** | [**WebhookSubscription**](WebhookSubscription.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Webhook } from './api';

const instance: Webhook = {
    object,
    webhook_id,
    developer_uuid,
    target_url,
    title,
    secrets,
    description,
    http_timeout,
    rate_limit,
    active,
    rate_limit_duration,
    created_at,
    updated_at,
    deleted_at,
    subscription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
