/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.26.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DehydratedFollower } from './dehydrated-follower';
// May contain unused imports in some cases
// @ts-ignore
import type { HydratedFollower } from './hydrated-follower';

/**
 * 
 * @export
 * @interface RelevantFollowersResponse
 */
export interface RelevantFollowersResponse {
    /**
     * 
     * @type {Array<HydratedFollower>}
     * @memberof RelevantFollowersResponse
     */
    'top_relevant_followers_hydrated': Array<HydratedFollower>;
    /**
     * 
     * @type {Array<DehydratedFollower>}
     * @memberof RelevantFollowersResponse
     */
    'all_relevant_followers_dehydrated': Array<DehydratedFollower>;
}

