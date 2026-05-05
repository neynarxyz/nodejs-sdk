# GetDevStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ready_to_publish** | **boolean** |  | [default to undefined]
**schema_version** | **number** |  | [default to undefined]
**completed_at** | **string** |  | [default to undefined]
**current_phase** | **number** |  | [default to undefined]
**last_updated_at** | **string** |  | [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [default to undefined]
**phases** | **{ [key: string]: { [key: string]: object; }; }** |  | [default to undefined]
**started_at** | **string** |  | [default to undefined]

## Example

```typescript
import { GetDevStatus200Response } from './api';

const instance: GetDevStatus200Response = {
    ready_to_publish,
    schema_version,
    completed_at,
    current_phase,
    last_updated_at,
    metadata,
    phases,
    started_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
