/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.18.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TransactionFrameConfig } from './transaction-frame-config';
// May contain unused imports in some cases
// @ts-ignore
import type { TransactionFramePayAllOfTransaction } from './transaction-frame-pay-all-of-transaction';

/**
 * 
 * @export
 * @interface FramePayTransactionRequestBody
 */
export interface FramePayTransactionRequestBody {
    /**
     * 
     * @type {TransactionFramePayAllOfTransaction}
     * @memberof FramePayTransactionRequestBody
     */
    'transaction': TransactionFramePayAllOfTransaction;
    /**
     * 
     * @type {TransactionFrameConfig}
     * @memberof FramePayTransactionRequestBody
     */
    'config': TransactionFrameConfig;
    /**
     * An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request. 
     * @type {string}
     * @memberof FramePayTransactionRequestBody
     */
    'idem'?: string;
}

