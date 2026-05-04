# GetCreditDrop200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | When the credit drop was generated | [default to undefined]
**raw_score** | **number** | Raw quality score from 0 to 1 | [default to undefined]
**percentile_score** | **number** | Percentile rank within 7-day global distribution | [default to undefined]
**reward_amount** | **number** | Credit reward amount | [default to undefined]
**claimed** | **boolean** | Whether the credit drop has been claimed | [default to undefined]
**credits_used** | **number** | Portion of this drop already consumed against STUDIO CU usage (incremented by the CU sync). Forfeited at allowance_expires_at if unused. | [default to undefined]
**credits_remaining** | **number** | reward_amount - credits_used, clamped at 0. Spendable only until allowance_expires_at. | [default to undefined]
**allowance_expires_at** | **string** | Timestamp at which the drop stops contributing to the effective CU limit. Stamped by the credit-drop job at insert time (default: created_at + 24h). | [default to undefined]
**expired** | **boolean** | Whether the credit drop\&#39;s allowance window has closed (NOW() &gt;&#x3D; allowance_expires_at). Once true, the drop no longer contributes to the effective CU limit; any unused portion is forfeited. | [default to undefined]

## Example

```typescript
import { GetCreditDrop200Response } from './api';

const instance: GetCreditDrop200Response = {
    created_at,
    raw_score,
    percentile_score,
    reward_amount,
    claimed,
    credits_used,
    credits_remaining,
    allowance_expires_at,
    expired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
