# ReactionBody

Specifies the details of a reaction to content on Farcaster. A reaction must specify its type (like/recast) and either a target cast ID or URL to react to. Only one target (either castId or URL) should be specified per reaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ReactionType**](ReactionType.md) |  | [default to undefined]
**targetCastId** | [**CastId**](CastId.md) | The unique identifier of the cast being reacted to. Must be a valid CastId containing the creator\&#39;s FID and the cast\&#39;s hash. | [optional] [default to undefined]
**targetUrl** | **string** | The URL being reacted to. Used when reacting to external content or when the cast ID is not available. | [optional] [default to undefined]

## Example

```typescript
import { ReactionBody } from './api';

const instance: ReactionBody = {
    type,
    targetCastId,
    targetUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
