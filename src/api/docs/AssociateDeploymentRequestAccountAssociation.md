# AssociateDeploymentRequestAccountAssociation

Signed domain association linking this deployment to a Farcaster account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **string** | Base64URL encoded JFS header | [default to undefined]
**payload** | **string** | Base64URL encoded JFS payload | [default to undefined]
**signature** | **string** | Base64URL encoded JFS signature | [default to undefined]

## Example

```typescript
import { AssociateDeploymentRequestAccountAssociation } from './api';

const instance: AssociateDeploymentRequestAccountAssociation = {
    header,
    payload,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
