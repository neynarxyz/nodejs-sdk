# RegisterUserReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline** | **number** |  | [default to undefined]
**fid** | **number** |  | [default to undefined]
**fname** | **string** |  | [optional] [default to undefined]
**metadata** | [**RegisterUserReqBodyMetadata**](RegisterUserReqBodyMetadata.md) |  | [optional] [default to undefined]
**requested_user_custody_address** | **string** |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**signer** | [**RegisterUserReqBodySigner**](RegisterUserReqBodySigner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RegisterUserReqBody } from './api';

const instance: RegisterUserReqBody = {
    deadline,
    fid,
    fname,
    metadata,
    requested_user_custody_address,
    signature,
    signer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
