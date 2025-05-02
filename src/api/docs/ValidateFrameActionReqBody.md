# ValidateFrameActionReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_bytes_in_hex** | **string** | Hexadecimal string of message bytes. | [default to undefined]
**cast_reaction_context** | **boolean** | Adds viewer_context inside the cast object to indicate whether the interactor reacted to the cast housing the mini app. | [optional] [default to true]
**follow_context** | **boolean** | Adds viewer_context inside the user (interactor) object to indicate whether the interactor follows or is followed by the cast author. | [optional] [default to false]
**signer_context** | **boolean** | Adds context about the app used by the user inside &#x60;frame.action&#x60;. | [optional] [default to false]
**channel_follow_context** | **boolean** | Adds context about the channel that the cast belongs to inside of the cast object. | [optional] [default to false]

## Example

```typescript
import { ValidateFrameActionReqBody } from './api';

const instance: ValidateFrameActionReqBody = {
    message_bytes_in_hex,
    cast_reaction_context,
    follow_context,
    signer_context,
    channel_follow_context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
