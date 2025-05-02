# RegisterUserReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **string** |  | [default to undefined]
**fid** | **number** |  | [default to undefined]
**requested_user_custody_address** | **string** |  | [default to undefined]
**deadline** | **number** |  | [default to undefined]
**fname** | **string** |  | [optional] [default to undefined]
**metadata** | [**RegisterUserReqBodyMetadata**](RegisterUserReqBodyMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RegisterUserReqBody } from './api';

const instance: RegisterUserReqBody = {
    signature,
    fid,
    requested_user_custody_address,
    deadline,
    fname,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
