# QueryTable200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**Array&lt;QueryTable200ResponseColumnsInner&gt;**](QueryTable200ResponseColumnsInner.md) | Column metadata | [default to undefined]
**rows** | **Array&lt;{ [key: string]: any | null; }&gt;** | Query result rows | [default to undefined]
**totalCount** | **number** | Total number of rows in table | [default to undefined]
**limit** | **number** | Applied limit | [default to undefined]
**offset** | **number** | Applied offset | [default to undefined]
**hasMore** | **boolean** | Whether more rows are available | [default to undefined]

## Example

```typescript
import { QueryTable200Response } from './api';

const instance: QueryTable200Response = {
    columns,
    rows,
    totalCount,
    limit,
    offset,
    hasMore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
