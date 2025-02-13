/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BanRecord } from './ban-record';
// May contain unused imports in some cases
// @ts-ignore
import type { NextCursor } from './next-cursor';

/**
 * 
 * @export
 * @interface BanListResponse
 */
export interface BanListResponse {
    /**
     * 
     * @type {Array<BanRecord>}
     * @memberof BanListResponse
     */
    'bans': Array<BanRecord>;
    /**
     * 
     * @type {NextCursor}
     * @memberof BanListResponse
     */
    'next': NextCursor;
}

