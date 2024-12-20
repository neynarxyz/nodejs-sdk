/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { StorageObject } from './storage-object';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface StorageUsageResponse
 */
export interface StorageUsageResponse {
    /**
     * 
     * @type {string}
     * @memberof StorageUsageResponse
     */
    'object'?: string;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof StorageUsageResponse
     */
    'user'?: UserDehydrated;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'casts'?: StorageObject;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'reactions'?: StorageObject;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'links'?: StorageObject;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'verified_addresses'?: StorageObject;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'username_proofs'?: StorageObject;
    /**
     * 
     * @type {StorageObject}
     * @memberof StorageUsageResponse
     */
    'signers'?: StorageObject;
    /**
     * 
     * @type {number}
     * @memberof StorageUsageResponse
     */
    'total_active_units'?: number;
}

