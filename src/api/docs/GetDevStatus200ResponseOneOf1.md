# GetDevStatus200ResponseOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_version** | **number** |  | [default to undefined]
**ready_to_publish** | **boolean** |  | [default to undefined]
**current_phase** | **number** |  | [default to undefined]
**started_at** | **string** |  | [default to undefined]
**last_updated_at** | **string** |  | [default to undefined]
**completed_at** | **string** |  | [default to undefined]
**phases** | **{ [key: string]: { [key: string]: any; }; }** |  | [default to undefined]
**metadata** | **{ [key: string]: any | null; }** |  | [default to undefined]

## Example

```typescript
import { GetDevStatus200ResponseOneOf1 } from './api';

const instance: GetDevStatus200ResponseOneOf1 = {
    schema_version,
    ready_to_publish,
    current_phase,
    started_at,
    last_updated_at,
    completed_at,
    phases,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
