/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.27.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Details for the error response
 * @export
 * @interface ErrorRes
 */
export interface ErrorRes {
    /**
     * 
     * @type {string}
     * @memberof ErrorRes
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorRes
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof ErrorRes
     */
    'property'?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorRes
     */
    'status'?: number;
}

