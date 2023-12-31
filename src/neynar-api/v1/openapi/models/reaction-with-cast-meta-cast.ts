/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import { EmbedUrl } from './embed-url';

/**
 * 
 * @export
 * @interface ReactionWithCastMetaCast
 */
export interface ReactionWithCastMetaCast {
    /**
     * User identifier (unsigned integer)
     * @type {number}
     * @memberof ReactionWithCastMetaCast
     */
    'cast_fid': number;
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastMetaCast
     */
    'cast_hash': string;
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastMetaCast
     */
    'cast_text': string;
    /**
     * 
     * @type {Array<EmbedUrl>}
     * @memberof ReactionWithCastMetaCast
     */
    'cast_embeds': Array<EmbedUrl>;
    /**
     * 
     * @type {string}
     * @memberof ReactionWithCastMetaCast
     */
    'cast_timestamp': string;
}

