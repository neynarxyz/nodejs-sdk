# VerificationRemoveBody

Contains the data required to remove a previously added blockchain address verification from a user\'s profile. This operation permanently removes the verification until explicitly re-added.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | The Ethereum address (0x-prefixed) for which the verification should be removed. Must match a previously verified address in the user\&#39;s profile. | [default to undefined]

## Example

```typescript
import { VerificationRemoveBody } from './api';

const instance: VerificationRemoveBody = {
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
