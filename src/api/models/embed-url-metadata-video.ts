/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.24.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { EmbedUrlMetadataVideoStreamInner } from './embed-url-metadata-video-stream-inner';

/**
 * 
 * @export
 * @interface EmbedUrlMetadataVideo
 */
export interface EmbedUrlMetadataVideo {
    /**
     * 
     * @type {number}
     * @memberof EmbedUrlMetadataVideo
     */
    'duration_s'?: number;
    /**
     * 
     * @type {Array<EmbedUrlMetadataVideoStreamInner>}
     * @memberof EmbedUrlMetadataVideo
     */
    'stream'?: Array<EmbedUrlMetadataVideoStreamInner>;
}

