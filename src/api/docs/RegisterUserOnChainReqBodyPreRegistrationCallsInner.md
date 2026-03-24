# RegisterUserOnChainReqBodyPreRegistrationCallsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_failure** | **boolean** | Set it to true if you want to ignore the failure of this call. If set to false, the registration will fail if this call fails. | [optional] [default to false]
**data** | **string** | Call data payload (hex-encoded) | [default to undefined]
**target** | **string** | Must be on the allowed contract allowlist. Contact support for more details. | [default to undefined]
**value** | **number** | Value in wei to send with the transaction. This is not the amount of ETH that will be sent, but rather the value of the transaction. | [optional] [default to 0]

## Example

```typescript
import { RegisterUserOnChainReqBodyPreRegistrationCallsInner } from './api';

const instance: RegisterUserOnChainReqBodyPreRegistrationCallsInner = {
    allow_failure,
    data,
    target,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
