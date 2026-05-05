# Verification

Verification details of an address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Address string (hex for ethereum, base58 for solana) | [default to undefined]
**app** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**protocol** | [**Protocol**](Protocol.md) |  | [default to undefined]
**verified_at** | **string** | ISO timestamp when the verification was created | [default to undefined]

## Example

```typescript
import { Verification } from './api';

const instance: Verification = {
    address,
    app,
    object,
    protocol,
    verified_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
