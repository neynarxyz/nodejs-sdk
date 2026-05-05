# FrameActionButton


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | [**FrameButtonActionType**](FrameButtonActionType.md) |  | [default to undefined]
**index** | **number** | Index of the button | [default to undefined]
**post_url** | **string** | Used specifically for the tx action type to post a successful transaction hash | [optional] [default to undefined]
**target** | **string** | Target of the button | [optional] [default to undefined]
**title** | **string** | Title of the button | [optional] [default to undefined]

## Example

```typescript
import { FrameActionButton } from './api';

const instance: FrameActionButton = {
    action_type,
    index,
    post_url,
    target,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
