/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionToken
 */
export interface SubscriptionToken {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionToken
     */
    'symbol': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionToken
     */
    'address': string | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionToken
     */
    'decimals': number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionToken
     */
    'erc20': boolean;
}

