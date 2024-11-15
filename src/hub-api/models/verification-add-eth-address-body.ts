/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Adds a Verification of ownership of an Ethereum Address
 * @export
 * @interface VerificationAddEthAddressBody
 */
export interface VerificationAddEthAddressBody {
    /**
     * 
     * @type {string}
     * @memberof VerificationAddEthAddressBody
     */
    'address': string;
    /**
     * 
     * @type {string}
     * @memberof VerificationAddEthAddressBody
     */
    'ethSignature': string;
    /**
     * 
     * @type {string}
     * @memberof VerificationAddEthAddressBody
     */
    'blockHash': string;
}
