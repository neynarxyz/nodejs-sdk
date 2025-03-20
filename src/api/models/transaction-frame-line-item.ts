/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.21.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TransactionFrameLineItem
 */
export interface TransactionFrameLineItem {
    /**
     * Name of the line item in transaction
     * @type {string}
     * @memberof TransactionFrameLineItem
     */
    'name': string;
    /**
     * Description of the line item in transaction
     * @type {string}
     * @memberof TransactionFrameLineItem
     */
    'description': string;
    /**
     * Optional image URL for the line item in transaction
     * @type {string}
     * @memberof TransactionFrameLineItem
     */
    'image'?: string;
}

