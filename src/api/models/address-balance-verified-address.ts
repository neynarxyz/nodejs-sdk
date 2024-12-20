/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Networks } from './networks';

/**
 * 
 * @export
 * @interface AddressBalanceVerifiedAddress
 */
export interface AddressBalanceVerifiedAddress {
    /**
     * The wallet address
     * @type {string}
     * @memberof AddressBalanceVerifiedAddress
     */
    'address': string;
    /**
     * 
     * @type {Networks}
     * @memberof AddressBalanceVerifiedAddress
     */
    'network': Networks;
}



