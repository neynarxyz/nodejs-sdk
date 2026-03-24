# DeployErc721RequestCollectionConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_uri** | **string** |  | [optional] [default to undefined]
**max_supply** | **number** | Max supply (0 &#x3D; unlimited) | [optional] [default to 0]
**royalty_bps** | **number** | Royalty in basis points (500 &#x3D; 5%, max 2500 &#x3D; 25%) | [optional] [default to 0]
**royalty_recipient** | **string** | Defaults to creator wallet | [optional] [default to undefined]

## Example

```typescript
import { DeployErc721RequestCollectionConfig } from './api';

const instance: DeployErc721RequestCollectionConfig = {
    contract_uri,
    max_supply,
    royalty_bps,
    royalty_recipient,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
