# OembedPhotoData

Photo OEmbed data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_name** | **string** | The name of the author/owner of the resource. | [optional] [default to undefined]
**author_url** | **string** | A URL for the author/owner of the resource. | [optional] [default to undefined]
**cache_age** | **string** | The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. | [optional] [default to undefined]
**height** | **number** | The height in pixels of the image specified in the url parameter. | [optional] [default to undefined]
**provider_name** | **string** | The name of the resource provider. | [optional] [default to undefined]
**provider_url** | **string** | The url of the resource provider. | [optional] [default to undefined]
**thumbnail_height** | **number** | The height of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_width must also be present. | [optional] [default to undefined]
**thumbnail_url** | **string** | A URL to a thumbnail image representing the resource. The thumbnail must respect any maxwidth and maxheight parameters. If this parameter is present, thumbnail_width and thumbnail_height must also be present. | [optional] [default to undefined]
**thumbnail_width** | **number** | The width of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_height must also be present. | [optional] [default to undefined]
**title** | **string** | A text title, describing the resource. | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**url** | **string** | The source URL of the image. Consumers should be able to insert this URL into an &lt;img&gt; element. Only HTTP and HTTPS URLs are valid. | [default to undefined]
**version** | **string** |  | [default to undefined]
**width** | **number** | The width in pixels of the image specified in the url parameter. | [optional] [default to undefined]

## Example

```typescript
import { OembedPhotoData } from './api';

const instance: OembedPhotoData = {
    author_name,
    author_url,
    cache_age,
    height,
    provider_name,
    provider_url,
    thumbnail_height,
    thumbnail_url,
    thumbnail_width,
    title,
    type,
    url,
    version,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
