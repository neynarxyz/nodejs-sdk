/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { NextCursor } from './next-cursor';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionWithCastMeta } from './reaction-with-cast-meta';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface UserCastLikeResponseResult
 */
export interface UserCastLikeResponseResult {
    /**
     * 
     * @type {User}
     * @memberof UserCastLikeResponseResult
     */
    'reactor': User;
    /**
     * 
     * @type {Array<ReactionWithCastMeta>}
     * @memberof UserCastLikeResponseResult
     */
    'likes': Array<ReactionWithCastMeta>;
    /**
     * 
     * @type {NextCursor}
     * @memberof UserCastLikeResponseResult
     */
    'next': NextCursor;
}

