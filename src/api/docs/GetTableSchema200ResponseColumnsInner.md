# GetTableSchema200ResponseColumnsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Column name | [default to undefined]
**type** | **string** | Column data type | [default to undefined]
**nullable** | **boolean** | Whether the column allows NULL values | [default to undefined]
**defaultValue** | **string** | Default value expression | [default to undefined]
**isPrimaryKey** | **boolean** | Whether the column is part of primary key | [default to undefined]
**position** | **number** | Ordinal position in table | [default to undefined]

## Example

```typescript
import { GetTableSchema200ResponseColumnsInner } from './api';

const instance: GetTableSchema200ResponseColumnsInner = {
    name,
    type,
    nullable,
    defaultValue,
    isPrimaryKey,
    position,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
