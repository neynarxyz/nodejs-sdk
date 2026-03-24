# GetTableSchema200ResponseIndexesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Index name | [default to undefined]
**columns** | **Array&lt;string&gt;** | Columns in the index | [default to undefined]
**isUnique** | **boolean** | Whether the index enforces uniqueness | [default to undefined]
**isPrimary** | **boolean** | Whether this is the primary key index | [default to undefined]

## Example

```typescript
import { GetTableSchema200ResponseIndexesInner } from './api';

const instance: GetTableSchema200ResponseIndexesInner = {
    name,
    columns,
    isUnique,
    isPrimary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
