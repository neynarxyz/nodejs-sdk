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
import { ReactionWithCastMetaCast } from './reaction-with-cast-meta-cast';
// May contain unused imports in some cases
// @ts-ignore
import { ReactionWithCastMetaReaction } from './reaction-with-cast-meta-reaction';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * Reaction of a user (either like or recast), along with its associated cast
 * @export
 * @interface ReactionWithCastMeta
 */
export interface ReactionWithCastMeta {
    /**
     * 
     * @type {ReactionWithCastMetaReaction}
     * @memberof ReactionWithCastMeta
     */
    'reaction': ReactionWithCastMetaReaction;
    /**
     * 
     * @type {ReactionWithCastMetaCast}
     * @memberof ReactionWithCastMeta
     */
    'cast'?: ReactionWithCastMetaCast;
    /**
     * 
     * @type {User}
     * @memberof ReactionWithCastMeta
     */
    'cast_author'?: User;
}

