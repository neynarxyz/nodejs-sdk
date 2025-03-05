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



/**
 * The provider of the trending casts feed. 
 * @export
 * @enum {string}
 */

export const FeedTrendingProvider = {
    Neynar: 'neynar',
    Openrank: 'openrank',
    Mbd: 'mbd'
} as const;

export type FeedTrendingProvider = typeof FeedTrendingProvider[keyof typeof FeedTrendingProvider];



