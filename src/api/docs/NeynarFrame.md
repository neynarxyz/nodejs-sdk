# NeynarFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the mini app. | [default to undefined]
**name** | **string** | Name of the mini app. | [default to undefined]
**link** | **string** | Generated link for the mini app\&#39;s first page. | [default to undefined]
**pages** | [**Array&lt;NeynarFramePage&gt;**](NeynarFramePage.md) |  | [default to undefined]
**valid** | **boolean** | Indicates if the mini app is valid. | [optional] [default to undefined]

## Example

```typescript
import { NeynarFrame } from './api';

const instance: NeynarFrame = {
    uuid,
    name,
    link,
    pages,
    valid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
