# RemoveChannelMemberReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**channel_id** | **string** | The unique identifier of a farcaster channel | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user (unsigned integer) | [default to undefined]
**role** | [**ChannelMemberRole**](ChannelMemberRole.md) |  | [default to undefined]

## Example

```typescript
import { RemoveChannelMemberReqBody } from './api';

const instance: RemoveChannelMemberReqBody = {
    signer_uuid,
    channel_id,
    fid,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
