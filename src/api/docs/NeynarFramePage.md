# NeynarFramePage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the page. | [default to undefined]
**version** | **string** | The version of the page schema. | [default to 'vNext']
**title** | **string** | The title of the page. | [default to undefined]
**image** | [**NeynarPageImage**](NeynarPageImage.md) |  | [default to undefined]
**buttons** | [**Array&lt;NeynarPageButton&gt;**](NeynarPageButton.md) |  | [optional] [default to undefined]
**input** | [**NeynarPageInput**](NeynarPageInput.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NeynarFramePage } from './api';

const instance: NeynarFramePage = {
    uuid,
    version,
    title,
    image,
    buttons,
    input,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
