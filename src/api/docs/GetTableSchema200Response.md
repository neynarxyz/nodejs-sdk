# GetTableSchema200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tableName** | **string** | Table name | [default to undefined]
**columns** | [**Array&lt;GetTableSchema200ResponseColumnsInner&gt;**](GetTableSchema200ResponseColumnsInner.md) | Table columns | [default to undefined]
**indexes** | [**Array&lt;GetTableSchema200ResponseIndexesInner&gt;**](GetTableSchema200ResponseIndexesInner.md) | Table indexes | [default to undefined]
**foreignKeys** | [**Array&lt;GetTableSchema200ResponseForeignKeysInner&gt;**](GetTableSchema200ResponseForeignKeysInner.md) | Foreign key relationships | [default to undefined]
**primaryKeyColumns** | **Array&lt;string&gt;** | Primary key column names | [default to undefined]

## Example

```typescript
import { GetTableSchema200Response } from './api';

const instance: GetTableSchema200Response = {
    tableName,
    columns,
    indexes,
    foreignKeys,
    primaryKeyColumns,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
