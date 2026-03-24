# UserDataBody

Contains the data for updating a specific field of a user\'s profile metadata. Each update operation modifies one profile field at a time, allowing granular control over profile information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**UserDataType**](UserDataType.md) | Specifies which profile field is being updated (e.g., profile picture, display name, bio). | [default to undefined]
**value** | **string** | The new value for the specified profile field. The format depends on the type: URLs for profile pictures, plain text for display names and bios, etc. | [default to undefined]

## Example

```typescript
import { UserDataBody } from './api';

const instance: UserDataBody = {
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
