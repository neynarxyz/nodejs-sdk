/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { PostCastReqBodyEmbedsCastIdProperties } from './post-cast-req-body-embeds-cast-id-properties';

/**
 * 
 * @export
 * @interface PostCastReqBodyEmbeds
 */
export interface PostCastReqBodyEmbeds {
    /**
     * 
     * @type {PostCastReqBodyEmbedsCastIdProperties}
     * @memberof PostCastReqBodyEmbeds
     */
    'cast_id'?: PostCastReqBodyEmbedsCastIdProperties;
    /**
     * 
     * @type {PostCastReqBodyEmbedsCastIdProperties}
     * @memberof PostCastReqBodyEmbeds
     */
    'castId'?: PostCastReqBodyEmbedsCastIdProperties;
    /**
     * 
     * @type {string}
     * @memberof PostCastReqBodyEmbeds
     */
    'url'?: string;
}

