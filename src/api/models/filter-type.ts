/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The type of filter to apply to the feed.
 * @export
 * @enum {string}
 */

export const FilterType = {
    Fids: 'fids',
    ParentUrl: 'parent_url',
    ChannelId: 'channel_id',
    EmbedUrl: 'embed_url',
    EmbedTypes: 'embed_types',
    GlobalTrending: 'global_trending'
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];



