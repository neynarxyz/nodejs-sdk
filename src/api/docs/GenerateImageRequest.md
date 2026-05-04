# GenerateImageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **string** | Text prompt describing the image to generate | [default to undefined]
**source_image_urls** | **Array&lt;string&gt;** | Optional array of source image URLs to edit or use as reference (max 5) | [optional] [default to undefined]
**width** | **number** | Output image width in pixels (default: 1024) | [optional] [default to 1024]
**height** | **number** | Output image height in pixels (default: 1024) | [optional] [default to 1024]
**format** | **string** | Output image format (default: png) | [optional] [default to FormatEnum_Png]
**high_fidelity** | **boolean** | Use the high-fidelity model (slower but more detailed). Default: false. | [optional] [default to false]

## Example

```typescript
import { GenerateImageRequest } from './api';

const instance: GenerateImageRequest = {
    prompt,
    source_image_urls,
    width,
    height,
    format,
    high_fidelity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
