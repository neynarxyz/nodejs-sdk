# FrameActionBody

Contains the data for a user\'s interaction with a Farcaster Frame. Frames are interactive elements within casts that can have up to 4 clickable buttons, allowing users to engage with content in predefined ways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL associated with the frame action. This typically points to the frame\&#39;s content or the destination that handles the interaction. | [default to undefined]
**buttonIndex** | **number** | Identifies which button the user clicked in the frame. Frames can have up to 4 buttons, numbered from 1 to 4. | [default to undefined]
**castId** | [**CastId**](CastId.md) | The unique identifier of the cast containing the frame that was interacted with. | [default to undefined]

## Example

```typescript
import { FrameActionBody } from './api';

const instance: FrameActionBody = {
    url,
    buttonIndex,
    castId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
