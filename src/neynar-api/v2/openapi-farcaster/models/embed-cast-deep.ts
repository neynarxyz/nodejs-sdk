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
     * 
     * @type {CastId}
     * @memberof EmbedCastDeep
     */
    'cast_id'?: CastId;
    /**
     * 
     * @type {CastDehydrated}
     * @memberof EmbedCastDeep
     */
    'cast': CastDehydrated;
}

