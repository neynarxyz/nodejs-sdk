/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.35.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { StoreType } from './store-type';

/**
 * 
 * @export
 * @interface StorageLimit
 */
export interface StorageLimit {
    /**
     * 
     * @type {StoreType}
     * @memberof StorageLimit
     */
    'storeType': StoreType;
    /**
     * 
     * @type {number}
     * @memberof StorageLimit
     */
    'limit': number;
}



