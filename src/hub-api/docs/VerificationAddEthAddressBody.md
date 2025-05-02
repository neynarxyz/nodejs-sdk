# VerificationAddEthAddressBody

Contains the data required to verify ownership of an Ethereum or Solana address. The verification process requires a cryptographic signature from the blockchain address and includes the block hash at the time of signing for timestamp verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | The Ethereum (0x-prefixed) or Solana address that the user is claiming ownership of. Must match the address that produced the signature. | [default to undefined]
**ethSignature** | **string** | Base64-encoded signature produced by the blockchain address, proving ownership. For Ethereum, this is an ECDSA signature of a specific message format. | [default to undefined]
**blockHash** | **string** | The hash of the most recent block when the signature was created. Used to verify the approximate time of signature creation. | [default to undefined]

## Example

```typescript
import { VerificationAddEthAddressBody } from './api';

const instance: VerificationAddEthAddressBody = {
    address,
    ethSignature,
    blockHash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
