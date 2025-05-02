# FrameV2

Mini app v2 object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | Version of the mini app, \&#39;next\&#39; for v2, \&#39;vNext\&#39; for v1 | [default to undefined]
**image** | **string** | URL of the image | [default to undefined]
**frames_url** | **string** | Launch URL of the mini app | [default to undefined]
**title** | **string** | Button title of a mini app | [optional] [default to undefined]
**manifest** | [**FarcasterManifest**](FarcasterManifest.md) |  | [optional] [default to undefined]
**author** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**metadata** | [**FrameV2AllOfMetadata**](FrameV2AllOfMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FrameV2 } from './api';

const instance: FrameV2 = {
    version,
    image,
    frames_url,
    title,
    manifest,
    author,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
