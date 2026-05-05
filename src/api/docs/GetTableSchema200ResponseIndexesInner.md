# GetTableSchema200ResponseIndexesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **Array&lt;string&gt;** | Columns in the index | [default to undefined]
**isPrimary** | **boolean** | Whether this is the primary key index | [default to undefined]
**isUnique** | **boolean** | Whether the index enforces uniqueness | [default to undefined]
**name** | **string** | Index name | [default to undefined]

## Example

```typescript
import { GetTableSchema200ResponseIndexesInner } from './api';

const instance: GetTableSchema200ResponseIndexesInner = {
    columns,
    isPrimary,
    isUnique,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
