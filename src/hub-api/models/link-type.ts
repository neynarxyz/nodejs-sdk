/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.21.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Defines the type of social connection between users. - follow: Establishes a following relationship where the user will receive updates from the target user in their feed
 * @export
 * @enum {string}
 */

export const LinkType = {
    Follow: 'follow'
} as const;

export type LinkType = typeof LinkType[keyof typeof LinkType];



