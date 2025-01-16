/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.9.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { EmbedUrlMetadataHtml } from './embed-url-metadata-html';
// May contain unused imports in some cases
// @ts-ignore
import type { EmbedUrlMetadataImage } from './embed-url-metadata-image';
// May contain unused imports in some cases
// @ts-ignore
import type { EmbedUrlMetadataVideo } from './embed-url-metadata-video';

/**
 * 
 * @export
 * @interface EmbedUrlMetadata
 */
export interface EmbedUrlMetadata {
    /**
     * 
     * @type {string}
     * @memberof EmbedUrlMetadata
     */
    '_status': string;
    /**
     * 
     * @type {string}
     * @memberof EmbedUrlMetadata
     */
    'content_type'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EmbedUrlMetadata
     */
    'content_length'?: number | null;
    /**
     * 
     * @type {EmbedUrlMetadataImage}
     * @memberof EmbedUrlMetadata
     */
    'image'?: EmbedUrlMetadataImage;
    /**
     * 
     * @type {EmbedUrlMetadataVideo}
     * @memberof EmbedUrlMetadata
     */
    'video'?: EmbedUrlMetadataVideo;
    /**
     * 
     * @type {EmbedUrlMetadataHtml}
     * @memberof EmbedUrlMetadata
     */
    'html'?: EmbedUrlMetadataHtml;
}

