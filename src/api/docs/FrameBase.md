# FrameBase

Mini app base object used across all versions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | Version of the mini app, \&#39;next\&#39; for v2, \&#39;vNext\&#39; for v1 | [default to undefined]
**image** | **string** | URL of the image | [default to undefined]
**frames_url** | **string** | Launch URL of the mini app | [default to undefined]

## Example

```typescript
import { FrameBase } from './api';

const instance: FrameBase = {
    version,
    image,
    frames_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
