# DeployErc721RequestMintConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_per_token** | **string** | Price per token in wei (0 &#x3D; free mint) | [optional] [default to '0']
**max_per_wallet** | **number** | Max tokens per wallet (0 &#x3D; unlimited) | [optional] [default to 0]
**max_per_tx** | **number** | Max tokens per transaction (0 &#x3D; unlimited) | [optional] [default to 0]
**start_timestamp** | **number** | Unix timestamp (defaults to current time) | [optional] [default to undefined]
**end_timestamp** | **number** | Unix timestamp (defaults to no end date) | [optional] [default to undefined]

## Example

```typescript
import { DeployErc721RequestMintConfig } from './api';

const instance: DeployErc721RequestMintConfig = {
    price_per_token,
    max_per_wallet,
    max_per_tx,
    start_timestamp,
    end_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
