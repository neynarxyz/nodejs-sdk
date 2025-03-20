/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.22.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionTierPrice
 */
export interface SubscriptionTierPrice {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionTierPrice
     */
    'period_duration_seconds'?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionTierPrice
     */
    'tokens_per_period'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionTierPrice
     */
    'initial_mint_price'?: string;
}

