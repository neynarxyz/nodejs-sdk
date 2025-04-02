/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The content type of the embedded file
 * @export
 * @enum {string}
 */

export const EmbedType = {
    Text: 'text',
    Image: 'image',
    Video: 'video',
    Audio: 'audio',
    TextHtml: 'text/html',
    TextPlain: 'text/plain',
    ImageJpeg: 'image/jpeg',
    ImagePng: 'image/png',
    ImageGif: 'image/gif',
    ImageWebp: 'image/webp',
    ImageSvgxml: 'image/svg+xml',
    ImageHeif: 'image/heif',
    VideoMp4: 'video/mp4',
    VideoQuicktime: 'video/quicktime',
    AudioMpeg: 'audio/mpeg',
    ApplicationPdf: 'application/pdf',
    ApplicationJson: 'application/json',
    ApplicationXMpegurl: 'application/x-mpegurl'
} as const;

export type EmbedType = typeof EmbedType[keyof typeof EmbedType];



