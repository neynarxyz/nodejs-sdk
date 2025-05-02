# CastComposerActionsListResponseActionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the action. | [optional] [default to undefined]
**icon** | **string** | The icon representing the action. | [optional] [default to undefined]
**description** | **string** | A brief description of the action. | [optional] [default to undefined]
**about_url** | **string** | URL to learn more about the action. | [optional] [default to undefined]
**image_url** | **string** | URL of the action\&#39;s image. | [optional] [default to undefined]
**action_url** | **string** | URL to perform the action. | [optional] [default to undefined]
**action** | [**CastComposerActionsListResponseActionsInnerAction**](CastComposerActionsListResponseActionsInnerAction.md) |  | [optional] [default to undefined]
**octicon** | **string** | Icon name for the action. | [optional] [default to undefined]
**added_count** | **number** | Number of times the action has been added. | [optional] [default to undefined]
**app_name** | **string** | Name of the application providing the action. | [optional] [default to undefined]
**author_fid** | **number** | Author\&#39;s Farcaster ID. | [optional] [default to undefined]
**category** | **string** | Category of the action. | [optional] [default to undefined]
**object** | **string** | Object type, which is \&quot;composer_action\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { CastComposerActionsListResponseActionsInner } from './api';

const instance: CastComposerActionsListResponseActionsInner = {
    name,
    icon,
    description,
    about_url,
    image_url,
    action_url,
    action,
    octicon,
    added_count,
    app_name,
    author_fid,
    category,
    object,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
