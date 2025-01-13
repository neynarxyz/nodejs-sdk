/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.1
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
import type { NextCursor } from './next-cursor';

/**
 * 
 * @export
 * @interface CastsSearchResponseResult
 */
export interface CastsSearchResponseResult {
    /**
     * 
     * @type {Array<CastWithInteractions>}
     * @memberof CastsSearchResponseResult
     */
    'casts': Array<CastWithInteractions>;
    /**
     * 
     * @type {NextCursor}
     * @memberof CastsSearchResponseResult
     */
    'next': NextCursor;
}

