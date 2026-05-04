# DeployErc721Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**symbol** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**external_link** | **string** |  | [optional] [default to undefined]
**max_supply** | **number** | Max supply (0 &#x3D; unlimited) | [optional] [default to 0]
**royalty_bps** | **number** | Royalty in basis points (500 &#x3D; 5%, max 2500 &#x3D; 25%) | [optional] [default to 0]
**royalty_recipient** | **string** | Defaults to creator wallet | [optional] [default to undefined]
**mint_config** | [**DeployErc721RequestMintConfig**](DeployErc721RequestMintConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeployErc721Request } from './api';

const instance: DeployErc721Request = {
    network,
    name,
    symbol,
    description,
    image,
    external_link,
    max_supply,
    royalty_bps,
    royalty_recipient,
    mint_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
