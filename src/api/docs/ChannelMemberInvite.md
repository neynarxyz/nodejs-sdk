# ChannelMemberInvite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **string** | The unique identifier of a farcaster channel | [default to undefined]
**role** | [**ChannelMemberRole**](ChannelMemberRole.md) |  | [default to undefined]
**inviter** | [**User**](User.md) |  | [default to undefined]
**invited** | [**User**](User.md) |  | [default to undefined]

## Example

```typescript
import { ChannelMemberInvite } from './api';

const instance: ChannelMemberInvite = {
    channel_id,
    role,
    inviter,
    invited,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
