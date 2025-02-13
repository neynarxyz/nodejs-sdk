/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractions } from './cast-with-interactions';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface ReactionWithCastInfo
 */
export interface ReactionWithCastInfo {
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastInfo
     */
    'reaction_type': ReactionWithCastInfoReactionTypeEnum;
    /**
     * 
     * @type {CastWithInteractions}
     * @memberof ReactionWithCastInfo
     */
    'cast': CastWithInteractions;
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastInfo
     */
    'reaction_timestamp': string;
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastInfo
     */
    'object': ReactionWithCastInfoObjectEnum;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof ReactionWithCastInfo
     */
    'user': UserDehydrated;
}

export const ReactionWithCastInfoReactionTypeEnum = {
    Like: 'like',
    Recast: 'recast'
} as const;

export type ReactionWithCastInfoReactionTypeEnum = typeof ReactionWithCastInfoReactionTypeEnum[keyof typeof ReactionWithCastInfoReactionTypeEnum];
export const ReactionWithCastInfoObjectEnum = {
    Likes: 'likes',
    Recasts: 'recasts'
} as const;

export type ReactionWithCastInfoObjectEnum = typeof ReactionWithCastInfoObjectEnum[keyof typeof ReactionWithCastInfoObjectEnum];


