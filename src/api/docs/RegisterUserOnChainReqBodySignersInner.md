# RegisterUserOnChainReqBodySignersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **string** | Hexadecimal number expressed as string with \&#39;0x\&#39; prefix | [default to undefined]
**metadata** | **string** | Hexadecimal number expressed as string with \&#39;0x\&#39; prefix | [default to undefined]
**public_key** | **string** | Ed25519 public key | [default to undefined]
**key_type** | **number** |  | [optional] [default to 1]
**metadata_type** | **number** |  | [optional] [default to 1]
**deadline** | **number** |  | [default to undefined]

## Example

```typescript
import { RegisterUserOnChainReqBodySignersInner } from './api';

const instance: RegisterUserOnChainReqBodySignersInner = {
    signature,
    metadata,
    public_key,
    key_type,
    metadata_type,
    deadline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
