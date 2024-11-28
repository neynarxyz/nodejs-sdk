/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OembedLinkData } from './oembed-link-data';
// May contain unused imports in some cases
// @ts-ignore
import type { OembedPhotoData } from './oembed-photo-data';
// May contain unused imports in some cases
// @ts-ignore
import type { OembedRichData } from './oembed-rich-data';
// May contain unused imports in some cases
// @ts-ignore
import type { OembedVideoData } from './oembed-video-data';

/**
 * @type EmbedUrlMetadataHtmlAllOfOembed
 * @export
 */
export type EmbedUrlMetadataHtmlAllOfOembed = { type: 'link' } & OembedLinkData | { type: 'photo' } & OembedPhotoData | { type: 'rich' } & OembedRichData | { type: 'video' } & OembedVideoData;


