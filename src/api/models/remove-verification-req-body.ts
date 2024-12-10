/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RemoveVerificationReqBody
 */
export interface RemoveVerificationReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof RemoveVerificationReqBody
     */
    'signer_uuid': string;
    /**
     * Ethereum address
     * @type {string}
     * @memberof RemoveVerificationReqBody
     */
    'address': string;
    /**
     * 
     * @type {string}
     * @memberof RemoveVerificationReqBody
     */
    'block_hash': string;
}

