# OembedVideoDataAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**html** | **string** | The HTML required to embed a video player. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. | [default to undefined]
**width** | **number** | The width in pixels required to display the HTML. | [default to undefined]
**height** | **number** | The height in pixels required to display the HTML. | [default to undefined]

## Example

```typescript
import { OembedVideoDataAllOf } from './api';

const instance: OembedVideoDataAllOf = {
    type,
    html,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
