# CreateX402SignatureRequestPaymentRequirementsAcceptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** | **string** |  | [default to undefined]
**network** | **string** |  | [default to undefined]
**maxAmountRequired** | **string** |  | [default to undefined]
**asset** | **string** | Ethereum address | [default to undefined]
**payTo** | **string** | Ethereum address | [default to undefined]
**resource** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**mimeType** | **string** |  | [optional] [default to undefined]
**outputSchema** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**maxTimeoutSeconds** | **number** |  | [default to undefined]
**extra** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateX402SignatureRequestPaymentRequirementsAcceptsInner } from './api';

const instance: CreateX402SignatureRequestPaymentRequirementsAcceptsInner = {
    scheme,
    network,
    maxAmountRequired,
    asset,
    payTo,
    resource,
    description,
    mimeType,
    outputSchema,
    maxTimeoutSeconds,
    extra,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
