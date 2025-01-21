/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.9.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UpdateUserReqBodyLocation } from './update-user-req-body-location';
// May contain unused imports in some cases
// @ts-ignore
import type { UpdateUserReqBodyVerifiedAccounts } from './update-user-req-body-verified-accounts';

/**
 * 
 * @export
 * @interface RegisterUserReqBodyMetadata
 */
export interface RegisterUserReqBodyMetadata {
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBodyMetadata
     */
    'bio'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBodyMetadata
     */
    'pfp_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBodyMetadata
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBodyMetadata
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBodyMetadata
     */
    'display_name'?: string;
    /**
     * 
     * @type {UpdateUserReqBodyVerifiedAccounts}
     * @memberof RegisterUserReqBodyMetadata
     */
    'verified_accounts'?: UpdateUserReqBodyVerifiedAccounts;
    /**
     * 
     * @type {UpdateUserReqBodyLocation}
     * @memberof RegisterUserReqBodyMetadata
     */
    'location'?: UpdateUserReqBodyLocation;
}

