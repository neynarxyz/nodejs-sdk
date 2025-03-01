/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.18.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface RelevantFungibleOwnersResponse
 */
export interface RelevantFungibleOwnersResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof RelevantFungibleOwnersResponse
     */
    'top_relevant_owners_hydrated'?: Array<User>;
    /**
     * 
     * @type {Array<User>}
     * @memberof RelevantFungibleOwnersResponse
     */
    'all_relevant_owners_dehydrated'?: Array<User>;
}

