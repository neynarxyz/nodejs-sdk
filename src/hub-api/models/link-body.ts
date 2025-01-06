/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LinkType } from './link-type';

/**
 * Defines a social connection between users in the Farcaster network. Currently used to establish following relationships, allowing users to curate their content feed.
 * @export
 * @interface LinkBody
 */
export interface LinkBody {
    /**
     * 
     * @type {LinkType}
     * @memberof LinkBody
     */
    'type': LinkType;
    /**
     * User-defined timestamp that preserves the original creation time when message.data.timestamp needs to be updated for compaction. Useful for maintaining chronological order in user feeds.
     * @type {number}
     * @memberof LinkBody
     */
    'displayTimestamp'?: number;
    /**
     * Farcaster ID (FID). A unique identifier assigned to each user in the Farcaster network. This number is permanent and cannot be changed. FIDs are assigned sequentially when users register on the network. 
     * @type {number}
     * @memberof LinkBody
     */
    'targetFid': number;
}



