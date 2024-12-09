/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.1.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The notification type of a cast. 
 * @export
 * @enum {string}
 */

export const CastNotificationType = {
    Mention: 'cast-mention',
    Reply: 'cast-reply'
} as const;

export type CastNotificationType = typeof CastNotificationType[keyof typeof CastNotificationType];



