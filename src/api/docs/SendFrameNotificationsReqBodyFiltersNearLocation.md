# SendFrameNotificationsReqBodyFiltersNearLocation

Only send notifications to users near a given location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **number** |  | [default to undefined]
**longitude** | **number** |  | [default to undefined]
**address** | [**LocationAddress**](LocationAddress.md) |  | [optional] [default to undefined]
**radius** | **number** | The radius in meters for the location search. Any location within this radius will be returned. | [optional] [default to undefined]

## Example

```typescript
import { SendFrameNotificationsReqBodyFiltersNearLocation } from './api';

const instance: SendFrameNotificationsReqBodyFiltersNearLocation = {
    latitude,
    longitude,
    address,
    radius,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
