# UpdateUserReqBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banner** | **string** | Requires pro subscription. | [optional] [default to undefined]
**bio** | **string** |  | [optional] [default to undefined]
**display_name** | **string** |  | [optional] [default to undefined]
**location** | [**RegisterUserReqBodyMetadataLocation**](RegisterUserReqBodyMetadataLocation.md) |  | [optional] [default to undefined]
**pfp_url** | **string** |  | [optional] [default to undefined]
**primary_eth_address** | **string** | Must be one of the verified addresses. | [optional] [default to undefined]
**primary_sol_address** | **string** | Must be one of the verified addresses. | [optional] [default to undefined]
**signer_uuid** | **string** | UUID of the signer. &#x60;signer_uuid&#x60; is paired with API key, can\&#39;t use a &#x60;uuid&#x60; made with a different API key. | [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**verified_accounts** | [**RegisterUserReqBodyMetadataVerifiedAccounts**](RegisterUserReqBodyMetadataVerifiedAccounts.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateUserReqBody } from './api';

const instance: UpdateUserReqBody = {
    banner,
    bio,
    display_name,
    location,
    pfp_url,
    primary_eth_address,
    primary_sol_address,
    signer_uuid,
    url,
    username,
    verified_accounts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
