/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Follow
 */
export interface Follow {
    /**
     * 
     * @type {string}
     * @memberof Follow
     */
    'object': FollowObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof Follow
     */
    'user': User;
}

export const FollowObjectEnum = {
    Follow: 'follow'
} as const;

export type FollowObjectEnum = typeof FollowObjectEnum[keyof typeof FollowObjectEnum];


