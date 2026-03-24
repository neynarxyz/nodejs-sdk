# DeployErc721Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **string** | Network to mint on. | [default to undefined]
**name** | **string** |  | [default to undefined]
**symbol** | **string** |  | [default to undefined]
**base_uri** | **string** | Base URI for token metadata | [default to undefined]
**mint_config** | [**DeployErc721RequestMintConfig**](DeployErc721RequestMintConfig.md) |  | [optional] [default to undefined]
**collection_config** | [**DeployErc721RequestCollectionConfig**](DeployErc721RequestCollectionConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeployErc721Request } from './api';

const instance: DeployErc721Request = {
    network,
    name,
    symbol,
    base_uri,
    mint_config,
    collection_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
