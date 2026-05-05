# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_addresses** | [**Array&lt;UserAuthAddressesInner&gt;**](UserAuthAddressesInner.md) |  | [default to undefined]
**custody_address** | **string** | Ethereum address | [default to undefined]
**display_name** | **string** |  | [optional] [default to undefined]
**experimental** | [**UserExperimental**](UserExperimental.md) |  | [optional] [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user or app (unsigned integer) | [default to undefined]
**follower_count** | **number** | The number of followers the user has. | [default to undefined]
**following_count** | **number** | The number of users the user is following. | [default to undefined]
**object** | **string** |  | [default to undefined]
**pfp_url** | **string** | The URL of the user\&#39;s profile picture | [optional] [default to undefined]
**pro** | [**UserPro**](UserPro.md) |  | [optional] [default to undefined]
**profile** | [**UserProfile**](UserProfile.md) |  | [default to undefined]
**registered_at** | **string** |  | [default to undefined]
**score** | **number** | Score that represents the probability that the account is not spam. | [optional] [default to undefined]
**username** | **string** |  | [default to undefined]
**verifications** | **Array&lt;string&gt;** |  | [default to undefined]
**verified_accounts** | [**Array&lt;UserVerifiedAccountsInner&gt;**](UserVerifiedAccountsInner.md) |  | [default to undefined]
**verified_addresses** | [**UserVerifiedAddresses**](UserVerifiedAddresses.md) |  | [default to undefined]
**viewer_context** | [**UserViewerContext**](UserViewerContext.md) |  | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    auth_addresses,
    custody_address,
    display_name,
    experimental,
    fid,
    follower_count,
    following_count,
    object,
    pfp_url,
    pro,
    profile,
    registered_at,
    score,
    username,
    verifications,
    verified_accounts,
    verified_addresses,
    viewer_context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
