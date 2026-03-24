# ChannelUserContext

Adds context on the viewer\'s or author\'s role in the channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**following** | **boolean** | Indicates if the user is following the channel. | [default to undefined]
**role** | [**ChannelMemberRole**](ChannelMemberRole.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelUserContext } from './api';

const instance: ChannelUserContext = {
    following,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
