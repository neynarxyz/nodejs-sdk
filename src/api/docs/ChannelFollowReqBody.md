# ChannelFollowReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key.  | [default to undefined]
**channel_id** | **string** | The unique identifier of a farcaster channel | [default to undefined]

## Example

```typescript
import { ChannelFollowReqBody } from './api';

const instance: ChannelFollowReqBody = {
    signer_uuid,
    channel_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
