/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.2
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

export const NotificationType = {
    Follows: 'follows',
    Recasts: 'recasts',
    Likes: 'likes',
    Mentions: 'mentions',
    Replies: 'replies'
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];



