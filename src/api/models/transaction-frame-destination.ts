/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.23.0
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
 * @interface TransactionFrameDestination
 */
export interface TransactionFrameDestination {
    /**
     * Ethereum address
     * @type {string}
     * @memberof TransactionFrameDestination
     */
    'address': string;
    /**
     * 
     * @type {Networks}
     * @memberof TransactionFrameDestination
     */
    'network': Networks;
    /**
     * Ethereum address
     * @type {string}
     * @memberof TransactionFrameDestination
     */
    'token_contract_address': string;
    /**
     * Amount to send (must be greater than 0)
     * @type {number}
     * @memberof TransactionFrameDestination
     */
    'amount': number;
}



