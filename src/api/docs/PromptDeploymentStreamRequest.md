# PromptDeploymentStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **string** | Deployment ID (UUID). Required if name not provided. | [optional] [default to undefined]
**fid** | **number** | Farcaster ID of the user; if not provided, namespace must be provided | [optional] [default to undefined]
**name** | **string** | Kubernetes deployment name. Required if deployment_id not provided. | [optional] [default to undefined]
**namespace** | **string** | Optional Kubernetes namespace. If not provided, will query for the active namespace for the given FID. | [optional] [default to undefined]
**prompt** | **string** | Prompt string to send to the deployment | [default to undefined]
**conversation_id** | **string** | Optional conversation ID to continue an existing chat. If not provided, a new conversation will be created. | [optional] [default to undefined]
**session_id** | **string** | Optional Claude SDK session ID to resume an existing Claude Code session. Enables session-based conversation continuity. | [optional] [default to undefined]
**system_prompt_variant** | **string** | System prompt variant to use. Defaults to stable if not provided. | [optional] [default to undefined]

## Example

```typescript
import { PromptDeploymentStreamRequest } from './api';

const instance: PromptDeploymentStreamRequest = {
    deployment_id,
    fid,
    name,
    namespace,
    prompt,
    conversation_id,
    session_id,
    system_prompt_variant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
