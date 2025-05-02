# OembedRichDataAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**html** | **string** | The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic. | [default to undefined]
**width** | **number** | The width in pixels required to display the HTML. | [default to undefined]
**height** | **number** | The height in pixels required to display the HTML. | [default to undefined]

## Example

```typescript
import { OembedRichDataAllOf } from './api';

const instance: OembedRichDataAllOf = {
    type,
    html,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
