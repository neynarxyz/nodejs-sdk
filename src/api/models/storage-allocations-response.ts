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


// May contain unused imports in some cases
// @ts-ignore
import type { StorageAllocation } from './storage-allocation';

/**
 * 
 * @export
 * @interface StorageAllocationsResponse
 */
export interface StorageAllocationsResponse {
    /**
     * 
     * @type {number}
     * @memberof StorageAllocationsResponse
     */
    'total_active_units'?: number;
    /**
     * 
     * @type {Array<StorageAllocation>}
     * @memberof StorageAllocationsResponse
     */
    'allocations'?: Array<StorageAllocation>;
}

