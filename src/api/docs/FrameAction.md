# FrameAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**button** | [**FrameActionButton**](FrameActionButton.md) |  | [default to undefined]
**input** | [**FrameInput**](FrameInput.md) |  | [optional] [default to undefined]
**state** | [**FrameState**](FrameState.md) |  | [optional] [default to undefined]
**transaction** | [**FrameTransaction**](FrameTransaction.md) |  | [optional] [default to undefined]
**address** | **string** | The connected wallet address of the interacting user. | [optional] [default to undefined]
**frames_url** | **string** | URL of the mini apps | [default to undefined]
**post_url** | **string** | URL of the post to get the next mini app | [default to undefined]

## Example

```typescript
import { FrameAction } from './api';

const instance: FrameAction = {
    version,
    title,
    image,
    button,
    input,
    state,
    transaction,
    address,
    frames_url,
    post_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
