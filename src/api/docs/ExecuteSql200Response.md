# ExecuteSql200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**Array&lt;QueryTable200ResponseColumnsInner&gt;**](QueryTable200ResponseColumnsInner.md) | Column metadata | [default to undefined]
**rows** | **Array&lt;{ [key: string]: any | null; }&gt;** | Query result rows | [default to undefined]
**rowCount** | **number** | Number of rows returned | [default to undefined]
**executionTimeMs** | **number** | Query execution time in milliseconds | [default to undefined]

## Example

```typescript
import { ExecuteSql200Response } from './api';

const instance: ExecuteSql200Response = {
    columns,
    rows,
    rowCount,
    executionTimeMs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
