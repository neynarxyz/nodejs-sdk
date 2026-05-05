# ListConversations200ResponseConversationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **boolean** | Whether the conversation is an admin conversation | [default to undefined]
**created_at** | **string** | Creation timestamp | [default to undefined]
**deployment_id** | **string** | Deployment ID | [default to undefined]
**id** | **string** | Conversation ID | [default to undefined]
**last_message_preview** | **string** | Preview of the last user message (truncated to ~80 chars) | [default to undefined]
**title** | **string** | AI-generated title summarizing the conversation topic | [default to undefined]
**updated_at** | **string** | Last update timestamp | [default to undefined]

## Example

```typescript
import { ListConversations200ResponseConversationsInner } from './api';

const instance: ListConversations200ResponseConversationsInner = {
    admin,
    created_at,
    deployment_id,
    id,
    last_message_preview,
    title,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
