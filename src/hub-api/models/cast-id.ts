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



/**
 * A unique identifier for a cast (post) in the Farcaster network, consisting of the creator\'s FID and a hash of the cast\'s content. This combination ensures global uniqueness across all casts.
 * @export
 * @interface CastId
 */
export interface CastId {
    /**
     * The Farcaster ID (FID) of the user who created the cast. Required to uniquely identify the cast\'s author in the network.
     * @type {number}
     * @memberof CastId
     */
    'fid': number;
    /**
     * A unique hash that identifies a specific cast within the creator\'s posts. Generated using HASH_SCHEME_BLAKE3 of the cast\'s content.
     * @type {string}
     * @memberof CastId
     */
    'hash': string;
}

