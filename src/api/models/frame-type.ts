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
 * Type of identifier (either \'uuid\' or \'url\')
 * @export
 * @enum {string}
 */

export const FrameType = {
    Uuid: 'uuid',
    Url: 'url'
} as const;

export type FrameType = typeof FrameType[keyof typeof FrameType];



