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
import type { CastDehydrated } from './cast-dehydrated';
// May contain unused imports in some cases
// @ts-ignore
import type { CastId } from './cast-id';

/**
 * 
 * @export
 * @interface EmbedCastDeep
 */
export interface EmbedCastDeep {
    /**
     * [DEPRECATED: Use \"cast\" key instead]
     * @type {CastId}
     * @memberof EmbedCastDeep
     * @deprecated
     */
    'cast_id'?: CastId;
    /**
     * 
     * @type {CastDehydrated}
     * @memberof EmbedCastDeep
     */
    'cast': CastDehydrated;
}

