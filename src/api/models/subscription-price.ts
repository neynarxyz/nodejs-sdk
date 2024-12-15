/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionPrice
 */
export interface SubscriptionPrice {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionPrice
     */
    'period_duration_seconds': number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPrice
     */
    'tokens_per_period': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPrice
     */
    'initial_mint_price': string;
}

