# SignerUuidBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key. | [default to undefined]
**app_domain** | **string** | Domain of the mini app | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [default to undefined]
**event** | [**AppHostEventType**](AppHostEventType.md) |  | [default to undefined]

## Example

```typescript
import { SignerUuidBody } from './api';

const instance: SignerUuidBody = {
    signer_uuid,
    app_domain,
    fid,
    event,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
