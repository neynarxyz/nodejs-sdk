# Frame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | Version of the mini app, \&#39;next\&#39; for v2, \&#39;vNext\&#39; for v1 | [default to undefined]
**image** | **string** | URL of the image | [default to undefined]
**frames_url** | **string** | Launch URL of the mini app | [default to undefined]
**buttons** | [**Array&lt;FrameActionButton&gt;**](FrameActionButton.md) |  | [optional] [default to undefined]
**post_url** | **string** | Post URL to take an action on this mini app | [optional] [default to undefined]
**title** | **string** | Button title of a mini app | [optional] [default to undefined]
**image_aspect_ratio** | **string** |  | [optional] [default to undefined]
**input** | [**FrameV1AllOfInput**](FrameV1AllOfInput.md) |  | [optional] [default to undefined]
**state** | [**FrameV1AllOfState**](FrameV1AllOfState.md) |  | [optional] [default to undefined]
**manifest** | [**FarcasterManifest**](FarcasterManifest.md) |  | [optional] [default to undefined]
**author** | [**UserDehydrated**](UserDehydrated.md) |  | [optional] [default to undefined]
**metadata** | [**FrameV2AllOfMetadata**](FrameV2AllOfMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Frame } from './api';

const instance: Frame = {
    version,
    image,
    frames_url,
    buttons,
    post_url,
    title,
    image_aspect_ratio,
    input,
    state,
    manifest,
    author,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
