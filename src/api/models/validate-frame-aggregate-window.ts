/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.23.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const ValidateFrameAggregateWindow = {
    _10s: '10s',
    _1m: '1m',
    _2m: '2m',
    _5m: '5m',
    _10m: '10m',
    _20m: '20m',
    _30m: '30m',
    _2h: '2h',
    _12h: '12h',
    _1d: '1d',
    _7d: '7d'
} as const;

export type ValidateFrameAggregateWindow = typeof ValidateFrameAggregateWindow[keyof typeof ValidateFrameAggregateWindow];



