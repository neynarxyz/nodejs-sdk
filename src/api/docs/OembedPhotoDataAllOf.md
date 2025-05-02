# OembedPhotoDataAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**url** | **string** | The source URL of the image. Consumers should be able to insert this URL into an &lt;img&gt; element. Only HTTP and HTTPS URLs are valid. | [default to undefined]
**width** | **number** | The width in pixels of the image specified in the url parameter. | [default to undefined]
**height** | **number** | The height in pixels of the image specified in the url parameter. | [default to undefined]

## Example

```typescript
import { OembedPhotoDataAllOf } from './api';

const instance: OembedPhotoDataAllOf = {
    type,
    url,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
