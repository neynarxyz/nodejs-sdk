/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash 
 * @export
 * @enum {string}
 */

export const CastParamType = {
    Url: 'url',
    Hash: 'hash'
} as const;

export type CastParamType = typeof CastParamType[keyof typeof CastParamType];



