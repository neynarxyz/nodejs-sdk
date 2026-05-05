# DeployErc721Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** |  | [optional] [default to undefined]
**external_link** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**max_supply** | **number** | Max supply (0 &#x3D; unlimited) | [optional] [default to 0]
**mint_config** | [**DeployErc721RequestMintConfig**](DeployErc721RequestMintConfig.md) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**network** | **string** |  | [default to undefined]
**royalty_bps** | **number** | Royalty in basis points (500 &#x3D; 5%, max 2500 &#x3D; 25%) | [optional] [default to 0]
**royalty_recipient** | **string** | Defaults to creator wallet | [optional] [default to undefined]
**symbol** | **string** |  | [default to undefined]

## Example

```typescript
import { DeployErc721Request } from './api';

const instance: DeployErc721Request = {
    description,
    external_link,
    image,
    max_supply,
    mint_config,
    name,
    network,
    royalty_bps,
    royalty_recipient,
    symbol,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
