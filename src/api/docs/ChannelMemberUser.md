# ChannelMemberUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** |  | [default to undefined]
**fid** | **number** | The unique identifier of a farcaster user (unsigned integer) | [default to undefined]
**username** | **string** |  | [default to undefined]
**display_name** | **string** |  | [optional] [default to undefined]
**custody_address** | **string** | Ethereum address | [default to undefined]
**pfp_url** | **string** |  | [optional] [default to undefined]
**profile** | [**UserProfile**](UserProfile.md) |  | [default to undefined]
**follower_count** | **number** | The number of followers the user has. | [default to undefined]
**following_count** | **number** | The number of users the user is following. | [default to undefined]
**verifications** | **Array&lt;string&gt;** |  | [default to undefined]
**verified_addresses** | [**UserVerifiedAddresses**](UserVerifiedAddresses.md) |  | [default to undefined]
**verified_accounts** | [**Array&lt;UserVerifiedAccountsInner&gt;**](UserVerifiedAccountsInner.md) | Verified accounts of the user on other platforms, currently only X is supported. | [default to undefined]
**power_badge** | **boolean** |  | [default to undefined]
**experimental** | [**UserExperimental**](UserExperimental.md) |  | [optional] [default to undefined]
**score** | **number** | Score that represents the probability that the account is not spam. | [default to undefined]
**viewer_context** | [**UserViewerContext**](UserViewerContext.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelMemberUser } from './api';

const instance: ChannelMemberUser = {
    object,
    fid,
    username,
    display_name,
    custody_address,
    pfp_url,
    profile,
    follower_count,
    following_count,
    verifications,
    verified_addresses,
    verified_accounts,
    power_badge,
    experimental,
    score,
    viewer_context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
