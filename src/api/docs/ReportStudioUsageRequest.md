# ReportStudioUsageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_units** | **number** | Compute units to add (must be positive) | [default to undefined]
**deployment_id** | **string** |  | [default to undefined]
**developer_uuid** | **string** |  | [default to undefined]
**idempotency_key** | **string** | UUID from the Claude SDK result message | [default to undefined]
**session_id** | **string** | Claude session ID for audit trail | [optional] [default to undefined]

## Example

```typescript
import { ReportStudioUsageRequest } from './api';

const instance: ReportStudioUsageRequest = {
    compute_units,
    deployment_id,
    developer_uuid,
    idempotency_key,
    session_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
