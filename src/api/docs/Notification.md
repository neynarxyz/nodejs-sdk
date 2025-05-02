# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**most_recent_timestamp** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**seen** | **boolean** |  | [default to undefined]
**follows** | [**Array&lt;Follower&gt;**](Follower.md) |  | [optional] [default to undefined]
**cast** | [**CastWithInteractions**](CastWithInteractions.md) |  | [optional] [default to undefined]
**reactions** | [**Array&lt;ReactionWithUserInfo&gt;**](ReactionWithUserInfo.md) |  | [optional] [default to undefined]
**count** | **number** | The number of notifications of this(follows, likes, recast) type bundled in a single notification. | [optional] [default to undefined]

## Example

```typescript
import { Notification } from './api';

const instance: Notification = {
    object,
    most_recent_timestamp,
    type,
    seen,
    follows,
    cast,
    reactions,
    count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
