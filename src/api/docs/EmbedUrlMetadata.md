# EmbedUrlMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_status** | **string** |  | [default to undefined]
**content_type** | **string** |  | [optional] [default to undefined]
**content_length** | **number** |  | [optional] [default to undefined]
**image** | [**EmbedUrlMetadataImage**](EmbedUrlMetadataImage.md) |  | [optional] [default to undefined]
**video** | [**EmbedUrlMetadataVideo**](EmbedUrlMetadataVideo.md) |  | [optional] [default to undefined]
**html** | [**HtmlMetadata**](HtmlMetadata.md) |  | [optional] [default to undefined]
**frame** | [**Frame**](Frame.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmbedUrlMetadata } from './api';

const instance: EmbedUrlMetadata = {
    _status,
    content_type,
    content_length,
    image,
    video,
    html,
    frame,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
