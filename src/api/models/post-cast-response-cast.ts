/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.17.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastEmbeddedParentAuthor } from './cast-embedded-parent-author';

/**
 * 
 * @export
 * @interface PostCastResponseCast
 */
export interface PostCastResponseCast {
    /**
     * Cast Hash
     * @type {string}
     * @memberof PostCastResponseCast
     */
    'hash': string;
    /**
     * 
     * @type {CastEmbeddedParentAuthor}
     * @memberof PostCastResponseCast
     */
    'author': CastEmbeddedParentAuthor;
    /**
     * 
     * @type {string}
     * @memberof PostCastResponseCast
     */
    'text': string;
}

