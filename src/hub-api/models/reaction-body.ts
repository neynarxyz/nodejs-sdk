/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
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
import type { CastId } from './cast-id';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionType } from './reaction-type';

/**
 * Adds or removes a Reaction from a Cast
 * @export
 * @interface ReactionBody
 */
export interface ReactionBody {
    /**
     * 
     * @type {ReactionType}
     * @memberof ReactionBody
     */
    'type': ReactionType;
    /**
     * 
     * @type {CastId}
     * @memberof ReactionBody
     */
    'targetCastId'?: CastId;
    /**
     * 
     * @type {string}
     * @memberof ReactionBody
     */
    'targetUrl'?: string;
}



