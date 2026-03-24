# SignedMessageBodySignedMessage

JFS-signed message containing the event payload. The message must be properly signed and contain valid event information.  Can be provided as a single string or json object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **string** |  | [default to undefined]
**payload** | **string** |  | [default to undefined]
**signature** | **string** |  | [default to undefined]

## Example

```typescript
import { SignedMessageBodySignedMessage } from './api';

const instance: SignedMessageBodySignedMessage = {
    header,
    payload,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
