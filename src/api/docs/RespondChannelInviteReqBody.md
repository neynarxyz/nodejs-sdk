# RespondChannelInviteReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**channel_id** | **string** | The unique identifier of a farcaster channel | [default to undefined]
**role** | [**ChannelMemberRole**](ChannelMemberRole.md) |  | [default to undefined]
**accept** | **boolean** | Accept or reject the invite | [default to undefined]

## Example

```typescript
import { RespondChannelInviteReqBody } from './api';

const instance: RespondChannelInviteReqBody = {
    signer_uuid,
    channel_id,
    role,
    accept,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
