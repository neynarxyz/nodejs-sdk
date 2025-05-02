# OembedVideoData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**version** | **string** |  | [default to undefined]
**title** | **string** | A text title, describing the resource. | [optional] [default to undefined]
**author_name** | **string** | The name of the author/owner of the resource. | [optional] [default to undefined]
**author_url** | **string** | A URL for the author/owner of the resource. | [optional] [default to undefined]
**provider_name** | **string** | The name of the resource provider. | [optional] [default to undefined]
**provider_url** | **string** | The url of the resource provider. | [optional] [default to undefined]
**cache_age** | **string** | The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. | [optional] [default to undefined]
**thumbnail_url** | **string** | A URL to a thumbnail image representing the resource. The thumbnail must respect any maxwidth and maxheight parameters. If this parameter is present, thumbnail_width and thumbnail_height must also be present. | [optional] [default to undefined]
**thumbnail_width** | **number** | The width of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_height must also be present. | [optional] [default to undefined]
**thumbnail_height** | **number** | The height of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_width must also be present. | [optional] [default to undefined]
**html** | **string** | The HTML required to embed a video player. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. | [default to undefined]
**width** | **number** | The width in pixels required to display the HTML. | [default to undefined]
**height** | **number** | The height in pixels required to display the HTML. | [default to undefined]

## Example

```typescript
import { OembedVideoData } from './api';

const instance: OembedVideoData = {
    type,
    version,
    title,
    author_name,
    author_url,
    provider_name,
    provider_url,
    cache_age,
    thumbnail_url,
    thumbnail_width,
    thumbnail_height,
    html,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
