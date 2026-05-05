# BatchGetTokenMetadata200ResponseTokensInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Token contract address | [default to undefined]
**decimals** | **number** | Token decimals | [default to undefined]
**description** | **string** | Token description | [default to undefined]
**fdv** | **string** | Fully diluted valuation in USD | [default to undefined]
**holder_count** | **number** | Number of token holders | [default to undefined]
**image_url** | **string** | Token logo URL | [default to undefined]
**liquidity** | **string** | Total liquidity in USD | [default to undefined]
**market_cap** | **string** | Market capitalization in USD | [default to undefined]
**name** | **string** | Token name | [default to undefined]
**network** | [**Network**](Network.md) |  | [default to undefined]
**price_change_24h_pct** | **number** | 24-hour price change percentage | [default to undefined]
**price_change_6h_pct** | **number** | 6-hour price change percentage | [default to undefined]
**price_source** | **string** | Source of price data | [default to undefined]
**price_updated_at** | **number** | Timestamp when price data was last updated (milliseconds) | [default to undefined]
**price_usd** | **string** | Token price in USD | [default to undefined]
**symbol** | **string** | Token symbol | [default to undefined]
**total_supply** | **string** | Total token supply | [default to undefined]
**volume_24h** | **string** | 24-hour trading volume in USD | [default to undefined]
**volume_6h** | **string** | 6-hour trading volume in USD | [default to undefined]

## Example

```typescript
import { BatchGetTokenMetadata200ResponseTokensInner } from './api';

const instance: BatchGetTokenMetadata200ResponseTokensInner = {
    address,
    decimals,
    description,
    fdv,
    holder_count,
    image_url,
    liquidity,
    market_cap,
    name,
    network,
    price_change_24h_pct,
    price_change_6h_pct,
    price_source,
    price_updated_at,
    price_usd,
    symbol,
    total_supply,
    volume_24h,
    volume_6h,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
