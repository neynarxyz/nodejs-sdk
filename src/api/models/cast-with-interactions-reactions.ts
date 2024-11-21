/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0
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
 * @interface CastWithInteractionsReactions
 */
export interface CastWithInteractionsReactions {
    /**
     * 
     * @type {Array<ReactionLike>}
     * @memberof CastWithInteractionsReactions
     */
    'likes': Array<ReactionLike>;
    /**
     * 
     * @type {Array<ReactionRecast>}
     * @memberof CastWithInteractionsReactions
     */
    'recasts': Array<ReactionRecast>;
    /**
     * 
     * @type {number}
     * @memberof CastWithInteractionsReactions
     */
    'likes_count': number;
    /**
     * 
     * @type {number}
     * @memberof CastWithInteractionsReactions
     */
    'recasts_count': number;
}

