/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.7
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UpdateUserReqBodyLocation } from './update-user-req-body-location';

/**
 * 
 * @export
 * @interface UpdateUserReqBody
 */
export interface UpdateUserReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'signer_uuid': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'bio'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'pfp_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReqBody
     */
    'display_name'?: string;
    /**
     * 
     * @type {UpdateUserReqBodyLocation}
     * @memberof UpdateUserReqBody
     */
    'location'?: UpdateUserReqBodyLocation;
}

