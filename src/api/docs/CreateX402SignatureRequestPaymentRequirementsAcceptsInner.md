# CreateX402SignatureRequestPaymentRequirementsAcceptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | Ethereum address | [default to undefined]
**description** | **string** |  | [default to undefined]
**extra** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**maxAmountRequired** | **string** |  | [default to undefined]
**maxTimeoutSeconds** | **number** |  | [default to undefined]
**mimeType** | **string** |  | [optional] [default to undefined]
**network** | **string** |  | [default to undefined]
**outputSchema** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**payTo** | **string** | Ethereum address | [default to undefined]
**resource** | **string** |  | [default to undefined]
**scheme** | **string** |  | [default to undefined]

## Example

```typescript
import { CreateX402SignatureRequestPaymentRequirementsAcceptsInner } from './api';

const instance: CreateX402SignatureRequestPaymentRequirementsAcceptsInner = {
    asset,
    description,
    extra,
    maxAmountRequired,
    maxTimeoutSeconds,
    mimeType,
    network,
    outputSchema,
    payTo,
    resource,
    scheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
