/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.22.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastEmbedded } from './cast-embedded';
// May contain unused imports in some cases
// @ts-ignore
import type { CastId } from './cast-id';

/**
 * 
 * @export
 * @interface EmbedCast
 */
export interface EmbedCast {
    /**
     * [DEPRECATED: Use \"cast\" key instead]
     * @type {CastId}
     * @memberof EmbedCast
     * @deprecated
     */
    'cast_id'?: CastId;
    /**
     * 
     * @type {CastEmbedded}
     * @memberof EmbedCast
     */
    'cast': CastEmbedded;
}

