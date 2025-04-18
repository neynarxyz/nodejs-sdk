/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.28.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { RegisterUserReqBodyMetadata } from './register-user-req-body-metadata';

/**
 * 
 * @export
 * @interface RegisterUserReqBody
 */
export interface RegisterUserReqBody {
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBody
     */
    'signature': string;
    /**
     * 
     * @type {number}
     * @memberof RegisterUserReqBody
     */
    'fid': number;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBody
     */
    'requested_user_custody_address': string;
    /**
     * 
     * @type {number}
     * @memberof RegisterUserReqBody
     */
    'deadline': number;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserReqBody
     */
    'fname'?: string;
    /**
     * 
     * @type {RegisterUserReqBodyMetadata}
     * @memberof RegisterUserReqBody
     */
    'metadata'?: RegisterUserReqBodyMetadata;
}

