# FetchUserData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **string** |  | [default to undefined]
**hashScheme** | [**HashScheme**](HashScheme.md) |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**signatureScheme** | [**SignatureScheme**](SignatureScheme.md) |  | [default to undefined]
**signer** | **string** |  | [default to undefined]
**data** | [**UserDataAddAllOfData**](UserDataAddAllOfData.md) |  | [default to undefined]
**messages** | [**Array&lt;UserDataAdd&gt;**](UserDataAdd.md) |  | [default to undefined]
**nextPageToken** | **string** | Base64-encoded pagination token for fetching the next page of results. An empty value indicates there are no more pages to return. Used in conjunction with the pageSize parameter to implement pagination across large result sets. | [default to undefined]

## Example

```typescript
import { FetchUserData200Response } from './api';

const instance: FetchUserData200Response = {
    hash,
    hashScheme,
    signature,
    signatureScheme,
    signer,
    data,
    messages,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
