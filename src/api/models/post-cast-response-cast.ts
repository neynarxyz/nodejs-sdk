/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
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
