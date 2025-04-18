/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.29.0
 * Contact: team@neynar.com
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
import type { ReactionWithCastInfo } from './reaction-with-cast-info';

/**
 * 
 * @export
 * @interface ReactionsResponse
 */
export interface ReactionsResponse {
    /**
     * 
     * @type {Array<ReactionWithCastInfo>}
     * @memberof ReactionsResponse
     */
    'reactions': Array<ReactionWithCastInfo>;
    /**
     * 
     * @type {NextCursor}
     * @memberof ReactionsResponse
     */
    'next': NextCursor;
}

