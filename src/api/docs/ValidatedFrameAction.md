# ValidatedFrameAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**interactor** | [**User**](User.md) |  | [default to undefined]
**tapped_button** | [**ValidatedFrameActionTappedButton**](ValidatedFrameActionTappedButton.md) |  | [default to undefined]
**input** | [**FrameInput**](FrameInput.md) |  | [optional] [default to undefined]
**state** | [**FrameState**](FrameState.md) |  | [default to undefined]
**cast** | [**CastWithInteractions**](CastWithInteractions.md) |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**signer** | [**ValidatedFrameActionSigner**](ValidatedFrameActionSigner.md) |  | [optional] [default to undefined]
**transaction** | [**FrameTransaction**](FrameTransaction.md) |  | [optional] [default to undefined]
**address** | **string** | The connected wallet address of the interacting user. | [optional] [default to undefined]

## Example

```typescript
import { ValidatedFrameAction } from './api';

const instance: ValidatedFrameAction = {
    object,
    url,
    interactor,
    tapped_button,
    input,
    state,
    cast,
    timestamp,
    signer,
    transaction,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
