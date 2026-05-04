# ListSecrets200ResponseSecretsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Environment variable name | [default to undefined]
**id** | **string** | Environment variable ID | [default to undefined]
**type** | **string** | Whether this is a system-managed or user-defined variable | [default to undefined]
**preview** | **string** | Masked preview of the secret value (e.g. \&quot;sk_l…t1b3\&quot;) | [optional] [default to undefined]

## Example

```typescript
import { ListSecrets200ResponseSecretsInner } from './api';

const instance: ListSecrets200ResponseSecretsInner = {
    key,
    id,
    type,
    preview,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
