# FrameV2WithFullAuthor

Mini app v2 object with full user object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | Version of the mini app, \&#39;next\&#39; for v2, \&#39;vNext\&#39; for v1 | [default to undefined]
**image** | **string** | URL of the image | [default to undefined]
**frames_url** | **string** | Launch URL of the mini app | [default to undefined]
**title** | **string** | Button title of a mini app | [optional] [default to undefined]
**manifest** | [**FarcasterManifest**](FarcasterManifest.md) |  | [optional] [default to undefined]
**author** | [**User**](User.md) |  | [optional] [default to undefined]
**metadata** | [**FrameV2WithFullAuthorAllOfMetadata**](FrameV2WithFullAuthorAllOfMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FrameV2WithFullAuthor } from './api';

const instance: FrameV2WithFullAuthor = {
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
