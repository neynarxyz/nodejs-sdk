# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**deleted_at** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**developer_uuid** | **string** |  | [default to undefined]
**http_timeout** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**rate_limit** | **number** |  | [default to undefined]
**rate_limit_duration** | **string** |  | [default to undefined]
**secrets** | [**Array&lt;WebhookSecret&gt;**](WebhookSecret.md) |  | [default to undefined]
**subscription** | [**WebhookSubscription**](WebhookSubscription.md) |  | [optional] [default to undefined]
**target_url** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**webhook_id** | **string** |  | [default to undefined]

## Example

```typescript
import { Webhook } from './api';

const instance: Webhook = {
    active,
    created_at,
    deleted_at,
    description,
    developer_uuid,
    http_timeout,
    object,
    rate_limit,
    rate_limit_duration,
    secrets,
    subscription,
    target_url,
    title,
    updated_at,
    webhook_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
