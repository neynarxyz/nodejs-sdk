/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.46.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastDehydrated } from './cast-dehydrated';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface ReactionWithUserInfo
 */
export interface ReactionWithUserInfo {
    /**
     * 
     * @type {string}
     * @memberof ReactionWithUserInfo
     */
    'object': ReactionWithUserInfoObjectEnum;
    /**
     * 
     * @type {CastDehydrated}
     * @memberof ReactionWithUserInfo
     */
    'cast': CastDehydrated;
    /**
     * 
     * @type {User}
     * @memberof ReactionWithUserInfo
     */
    'user': User;
}

export const ReactionWithUserInfoObjectEnum = {
    Likes: 'likes',
    Recasts: 'recasts'
} as const;

export type ReactionWithUserInfoObjectEnum = typeof ReactionWithUserInfoObjectEnum[keyof typeof ReactionWithUserInfoObjectEnum];


