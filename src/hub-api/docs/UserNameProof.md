# UserNameProof


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **number** | Seconds since Unix Epoch which began on Jan 1, 1970 00:00:00 UTC | [default to undefined]
**name** | **string** |  | [default to undefined]
**owner** | **string** |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**fid** | **number** | The FID of the user who owns this username proof | [default to undefined]
**type** | [**UserNameType**](UserNameType.md) |  | [default to undefined]

## Example

```typescript
import { UserNameProof } from './api';

const instance: UserNameProof = {
    timestamp,
    name,
    owner,
    signature,
    fid,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
