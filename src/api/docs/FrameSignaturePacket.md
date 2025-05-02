# FrameSignaturePacket

The Mini app Signature Packet (https://docs.farcaster.xyz/developers/frames/spec#frame-signature-packet)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**untrustedData** | [**FrameSignaturePacketUntrustedData**](FrameSignaturePacketUntrustedData.md) |  | [default to undefined]
**trustedData** | [**FrameSignaturePacketTrustedData**](FrameSignaturePacketTrustedData.md) |  | [default to undefined]

## Example

```typescript
import { FrameSignaturePacket } from './api';

const instance: FrameSignaturePacket = {
    untrustedData,
    trustedData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
