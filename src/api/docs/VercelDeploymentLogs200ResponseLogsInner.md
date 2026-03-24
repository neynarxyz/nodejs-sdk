# VercelDeploymentLogs200ResponseLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Event type (stdout, stderr, etc.) | [default to undefined]
**text** | **string** | Log text content | [optional] [default to undefined]
**created** | **number** | Timestamp of the log event | [default to undefined]
**date** | **number** | Date of the log event | [default to undefined]

## Example

```typescript
import { VercelDeploymentLogs200ResponseLogsInner } from './api';

const instance: VercelDeploymentLogs200ResponseLogsInner = {
    type,
    text,
    created,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
