/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ReactionLike } from './reaction-like';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionRecast } from './reaction-recast';

/**
 * 
 * @export
 * @interface CastReactions
 */
export interface CastReactions {
    /**
     * 
     * @type {Array<ReactionLike>}
     * @memberof CastReactions
     */
    'likes': Array<ReactionLike>;
    /**
     * 
     * @type {Array<ReactionRecast>}
     * @memberof CastReactions
     */
    'recasts': Array<ReactionRecast>;
    /**
     * 
     * @type {number}
     * @memberof CastReactions
     */
    'likes_count': number;
    /**
     * 
     * @type {number}
     * @memberof CastReactions
     */
    'recasts_count': number;
}

