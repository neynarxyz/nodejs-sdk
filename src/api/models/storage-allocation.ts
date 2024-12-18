/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface StorageAllocation
 */
export interface StorageAllocation {
    /**
     * 
     * @type {string}
     * @memberof StorageAllocation
     */
    'object'?: string;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof StorageAllocation
     */
    'user'?: UserDehydrated;
    /**
     * 
     * @type {number}
     * @memberof StorageAllocation
     */
    'units'?: number;
    /**
     * 
     * @type {string}
     * @memberof StorageAllocation
     */
    'expiry'?: string;
    /**
     * 
     * @type {string}
     * @memberof StorageAllocation
     */
    'timestamp'?: string;
}

