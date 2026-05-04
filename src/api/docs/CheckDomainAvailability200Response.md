# CheckDomainAvailability200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **boolean** | Whether the subdomain is available | [default to undefined]
**domain** | **string** | The full domain (e.g., myapp.neynar.app) | [default to undefined]
**reason** | **string** | Reason why the subdomain is unavailable (e.g., \&quot;reserved\&quot;, \&quot;taken\&quot;) | [optional] [default to undefined]

## Example

```typescript
import { CheckDomainAvailability200Response } from './api';

const instance: CheckDomainAvailability200Response = {
    available,
    domain,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
