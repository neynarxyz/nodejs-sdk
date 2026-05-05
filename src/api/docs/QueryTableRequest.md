# QueryTableRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **Array&lt;string&gt;** | Columns to select (defaults to all) | [optional] [default to undefined]
**deployment_id** | **string** | Deployment ID (UUID) | [default to undefined]
**fid** | **number** | Farcaster ID of the user. Required for non-admin users. | [optional] [default to undefined]
**limit** | **number** | Maximum rows to return (default: 100, max: 1000) | [optional] [default to undefined]
**offset** | **number** | Number of rows to skip | [optional] [default to undefined]
**orderBy** | **string** | Column to sort by | [optional] [default to undefined]
**orderDirection** | **string** | Sort direction | [optional] [default to undefined]
**table** | **string** | Table name to query | [default to undefined]

## Example

```typescript
import { QueryTableRequest } from './api';

const instance: QueryTableRequest = {
    columns,
    deployment_id,
    fid,
    limit,
    offset,
    orderBy,
    orderDirection,
    table,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
