/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SignedKeyRequestSponsor } from './signed-key-request-sponsor';

/**
 * 
 * @export
 * @interface RegisterSignerKeyReqBody
 */
export interface RegisterSignerKeyReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof RegisterSignerKeyReqBody
     */
    'signer_uuid': string;
    /**
     * Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key
     * @type {string}
     * @memberof RegisterSignerKeyReqBody
     */
    'signature': string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof RegisterSignerKeyReqBody
     */
    'app_fid': number;
    /**
     * unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
     * @type {number}
     * @memberof RegisterSignerKeyReqBody
     */
    'deadline': number;
    /**
     * Url to redirect to after the signer is approved.  **Note** : This should only be used when requesting a signer from a native mobile application. 
     * @type {string}
     * @memberof RegisterSignerKeyReqBody
     */
    'redirect_url'?: string;
    /**
     * 
     * @type {SignedKeyRequestSponsor}
     * @memberof RegisterSignerKeyReqBody
     */
    'sponsor'?: SignedKeyRequestSponsor;
}

